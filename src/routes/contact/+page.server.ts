import { SECRET_TWITTER_TOKEN, SECRET_GITHUB_TOKEN } from '$env/static/private';
import type { SocialMetric } from '$src/types/Socials';
import { config } from '$src/store/Config';

export const prerender = true;

export const _getTwitterInfo = async (username: string) => {
  const twitterEndpoint = `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`;
  return await fetch(twitterEndpoint, {
    headers: {
      Authorization: `Bearer ${SECRET_TWITTER_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => res.json())
    .then((stats) => {
      if (stats.data && stats.data.public_metrics) {
        const { public_metrics } = stats.data;
        const { followers_count, tweet_count } = public_metrics;
        const metrics: SocialMetric[] = [
          { label: 'Followers', value: followers_count.toLocaleString() },
          { label: 'Tweets', value: tweet_count.toLocaleString() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getRedditInfo = async (username: string) => {
  const redditEndpoint = `https://api.reddit.com/user/${username}/about`;
  return await fetch(redditEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.data && stats.data.link_karma) {
        const { total_karma, created_utc } = stats.data;
        const metrics: SocialMetric[] = [
          { label: 'Karma', value: total_karma.toLocaleString() },
          {
            label: 'Joined',
            value: new Date(created_utc * 1000).getFullYear(),
          },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getGithubInfo = async (username: string) => {
  const githubEndpoint = `https://api.github.com/users/${username}`;
  const githubRequest = {
    headers: {
      Authorization: `Bearer ${SECRET_GITHUB_TOKEN}`,
    },
  };
  return await fetch(githubEndpoint, githubRequest)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.public_repos) {
        const { public_repos, followers } = stats;
        const metrics: SocialMetric[] = [
          { label: 'Repos', value: public_repos.toLocaleString() },
          { label: 'Followers', value: followers.toLocaleString() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getStackOverflowInfo = async (username: string) => {
  const userId = username.replace(/\D/g, '');
  const stackOverflowEndpoint = `https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`;
  return await fetch(stackOverflowEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.items && stats.items[0]) {
        const { reputation, creation_date } = stats.items[0];
        const metrics: SocialMetric[] = [
          { label: 'Rep', value: reputation.toLocaleString() },
          {
            label: 'Joined',
            value: new Date(creation_date * 1000).getFullYear(),
          },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getKeybaseInfo = async (username: string) => {
  const keyBaseEndpoint = `https://keybase.io/_/api/1.0/user/lookup.json?usernames=${username}`;
  return await fetch(keyBaseEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats && stats.them && stats.them[0]) {
        const { basics, devices } = stats.them[0];
        const metrics: SocialMetric[] = [
          {
            label: 'Joined',
            value: new Date(basics.ctime * 1000).getFullYear(),
          },
          { label: 'Devices', value: Object.keys(devices).length },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const load = async () => {
  const {
    // Get usernames from config
    Twitter: twitterUn,
    Reddit: redditUn,
    GitHub: githubUn,
    StackOverflow: stackoverflowUn,
    KeyBase: keybaseUn,
  } = config.contact.socials;
  // Trigger fetch stats for each social
  const [
    twitter,
    reddit,
    github,
    stackoverflow,
    keybase,
  ] = await Promise.all([
    _getTwitterInfo(twitterUn),
    _getRedditInfo(redditUn),
    _getGithubInfo(githubUn),
    _getStackOverflowInfo(stackoverflowUn),
    _getKeybaseInfo(keybaseUn),
  ]);
  return {
    props: {
      twitter,
      reddit,
      github,
      stackoverflow,
      keybase,
    },
  };
};