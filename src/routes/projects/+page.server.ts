import { config } from '$lib/store/Config';
import { SECRET_GITHUB_TOKEN, SECRET_CODEBERG_TOKEN } from '$env/static/private';
import type { Project, Mirror } from '$lib/types/Project';

export const prerender = true;

const makeProjectList = async (ghResponse: any): Promise<Project[]> => {
  if (!ghResponse || !Array.isArray(ghResponse)) return [];
  return ghResponse
    .map((repo: any) => {
      const projectComplimentaryData =
        config.projectComplimentaryData.find(
          (p) => p.name.toLocaleLowerCase() === repo.name.toLocaleLowerCase()
        ) || {};
      return {
        id: repo.id,
        name: repo.name,
        user: repo.owner.login,
        url: repo.html_url,
        description: repo.description,
        isFork: repo.fork,
        createdAt: repo.created_at,
        updatedAt: repo.pushed_at,
        homepage: repo.homepage,
        language: repo.language,
        license: repo.license?.name,
        size: repo.size,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        issues: repo.open_issues_count,
        topics: repo.topics,
        archived: repo.archived,
        ...projectComplimentaryData, // Append and merge with any hard-coded data from config
      };
    })
    .sort((a, b) => {
      return b.stars - a.stars;
    });
};

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const githubApiUrl = `https://api.github.com/users/${config.githubUser}/repos?per_page=100&sort=created&direction=desc`;
  const githubRequest = {
    headers: SECRET_GITHUB_TOKEN ? { Authorization: `Bearer ${SECRET_GITHUB_TOKEN}` } : {},
  };
  const repos = await fetch(githubApiUrl, githubRequest)
    .then((res: any) => res.json())
    .then(makeProjectList);

  const mirrors = SECRET_CODEBERG_TOKEN ?
    await fetch(`https://codeberg.org/api/v1/user/repos?access_token=${SECRET_CODEBERG_TOKEN}`)
      .then((res: any) => res.json()) as Mirror[]
    : {};
  return { repos, mirrors };
}
