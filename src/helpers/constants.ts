import type { SocialNetwork } from '$src/types/Socials';

export const emailJsEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'Twitter',
    icon: 'twitter',
    tone: '#1DA1F2',
    link: 'https://twitter.com/',
  },
  {
    name: 'GitHub',
    icon: 'github2',
    tone: '#585858',
    link: 'https://github.com/',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    tone: '#0A66C2',
    link: 'https://www.linkedin.com/in/',
    noAt: true,
  },
  {
    name: 'Reddit',
    icon: 'reddit',
    tone: '#FF4500',
    link: 'https://www.reddit.com/user/',
  },
  {
    name: 'StackOverflow',
    icon: 'stackoverflow',
    tone: '#F58025',
    link: 'https://stackoverflow.com/users/',
    noAt: true,
  },
  {
    name: 'KeyBase',
    icon: 'keybase',
    tone: '#33A0FF',
    link: 'https://keybase.io/',
    noAt: true,
  },
  {
    name: 'DockerHub',
    icon: 'docker',
    tone: '#0db7ed',
    link: 'https://hub.docker.com/u/',
    noAt: true,
  },
];