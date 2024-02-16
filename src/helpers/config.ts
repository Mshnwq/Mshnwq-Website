import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Hayan Al-Machnouk',
  nickname: 'Mshnwq',
  description: '',
  source: 'https://github.com/Mshnwq/mshnwq-website',
  baseUrl: 'https://mshnwq.com',
  initialFeeds: [
    { 
      label: 'Blog', 
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blog.atom' 
    }
  ],
  additionalFeeds: [
    { 
      label: 'Blog', 
      url: 'https://blog.mshnwq.com/feed'
    },
    {
      label: 'GitHub',
      url: 'https://raw.githubusercontent.com/Mshnwq/feeds/main/github.atom',
    },
    { 
      label: 'Twitter', 
      url: 'https://raw.githubusercontent.com/Mshnwq/feeds/main/twitter.atom'
    },
    {
      label: 'YouTube',
      url: 'https://raw.githubusercontent.com/Mshnwq/feeds/main/youtube.atom',
    },
  ],
  routeLinks: [
    { label: 'Home',
      route: '/',
      color: 'var(--accent-1, #ff0099)' },
    {
      label: 'Blog',
      route: '/blog',
      color: 'var(--accent-2, #b45eff)',
      description: 'Published articles, notes, tutorials and updates',
    },
    // {
    //   label: 'Projects',
    //   route: '/projects',
    //   color: 'var(--accent-3, #01c0f0)',
    //   description: 'Personal projects and open source work',
    // },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links, GPG keys and contact form',
    },
  ],
  footerInfo: {
    author: 'Hayan Al-Machnouk',
    authorSite: 'https://github.com/Mshnwq',
    license: 'MIT',
    // TODO: MIT file
    licenseLink: 'https://github.com/Mshnwq/mshnwq-website/blob/main/LICENSE.md',
    copyright: true,
  },
  githubUser: 'Mshnwq',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      background: '#101010',
      foreground: '#fafafa',
      'dimmed-text': '#808080',
      'card-background': '#1b1b1b',
      'card-border': '1px solid #2a2a2a',
      'code-background': '#333',
      accent: '#01c0f0',
      'accent-1': '#ff0099',
      'accent-2': '#b45eff',
      'accent-3': '#01c0f0',
      'accent-4': '#1de691',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
      'matrix-effect-background': 'rgba(16, 16, 16, 0.05)',
      'matrix-effect-text': 'var(--foreground)',
    },
    light: {
      background: '#ededed',
      foreground: '#2a3367',
      'card-background': '#F8F8FF',
      'card-border': '1px solid #0000001a',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
      'matrix-effect-background': 'rgba(237, 237, 237, 0.05)',
      'matrix-effect-text': 'var(--foreground)',
    },
    callisto: {
      background: '#0a192f',
      foreground: '#dcdcdc',
      'dimmed-text': '#8892b0',
      'card-background': '#0b1021',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#00ccb4',
      'accent-2': '#00ccb4',
      'accent-3': '#00ccb4',
      'accent-4': '#00ccb4',
      'home-accent-background': '#00ccb4',
      'home-tile-background': '#0B1021',
      'matrix-effect-background': 'rgba(16, 16, 16, 0.05)',
      'matrix-effect-text': '#36ba01',
      // 'matrix-effect-text': '#03A062',
    },
    crimson: {
      background: '#101010',
      foreground: '#B01030',
      'dimmed-text': '#8892b0',
      'card-background': '#0b1021',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#00ccb4',
      'accent-2': '#00ccb4',
      'accent-3': '#00ccb4',
      'accent-4': '#00ccb4',
      'home-accent-background': '#00ccb4',
      'home-tile-background': '#0B1021',
      'matrix-effect-background': 'rgba(16, 16, 16, 0.05)',
      'matrix-effect-text': 'var(--foreground)',
    },
  },
  workExperience: [
    {
      company: 'AND.Digital',
      companyUrl: 'https://and.digital/',
      companyLogo: 'https://and.digital/favicon.ico',
      jobTitle: 'Principle Engineer',
      datesWorked: 'August 2022 - Present',
      projectType: 'Clients',
      projects: [
        { name: 'Frasers Group', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', description: '', },
        { name: 'Lloyds Bank', logo: 'https://i.ibb.co/GCSDPCq/Lloyds-bank.jpg', description: '', },
      ],
      technologies: [ 'TypeScript', 'React Native', 'Azure' ],
    },
    {
      company: 'Galaxy',
      companyUrl: 'https://galaxy.com/',
      companyLogo: 'https://i.ibb.co/fX2rF84/galaxy-digital.png',
      jobTitle: 'VP Frontend Engineer',
      datesWorked: 'Jan 2021 - July 2022',
      responsibilities: 'Worked on real-time React-based Web3 trading application',
      technologies: [ 'React', 'StoryBook', 'Cypress', 'web3js',],
    },
    {
      company: 'Freelance',
      companyUrl: 'https://aliciasykes.com/',
      companyLogo: 'https://i.ibb.co/Dt6kGFQ/brick.png',
      jobTitle: 'Full-Stack Developer',
      datesWorked: 'February 2019 - Jan 2021',
      responsibilities: '',
      projectType: 'Projects',
      projects: [
        { name: 'Futr.AI', logo: 'https://i.ibb.co/SyjxvhT/Futr-ai.png', description: '', },
        { name: 'Shell', logo: 'https://i.ibb.co/7r1K9cb/Shell.png', description: '', },
        { name: 'Shell Recharge', logo: 'https://i.ibb.co/BBdP2Wh/Shell-recharge.jpg', description: ''  },
        { name: 'Machine Max', logo: 'https://i.ibb.co/XzXTKWF/machine-max.png', description: '', },
        { name: 'Ctemplar', logo: 'https://i.ibb.co/2Sg6G3s/Ctemplar.png', description: '', },
      ],
      technologies: [ 'React', 'React Native', 'TypeScript', 'GraphQL', 'GCP' ],
    },
    {
      company: 'Accenture',
      companyUrl: 'https://www.accenture.com/',
      companyLogo: 'https://i.ibb.co/kcCKDF1/accenture.png',
      jobTitle: 'Software Developer',
      datesWorked: 'June 2014 - February 2019',
      responsibilities: ''
        + 'After joining as an associate, I had the opportunity to work on a range of exciting client projects, '
        + 'each with their own challenges, his helped me to develop my skills and knowledge in a variety of areas. '
        + 'Over time I worked my way up to a senior role, where I could actively deliver high quality solutions to clients.',
        projectType: 'Clients',
        projects: [
        { name: 'E.ON', logo: 'https://i.ibb.co/4PcVN4B/Eon.png', description: '', },
        { name: 'B&Q', logo: 'https://i.ibb.co/F79xSDK/Bandq.jpg', description: '', },
        { name: 'Boots', logo: 'https://i.ibb.co/SnPtC8t/Boots.jpg', description: '', },
        { name: 'TK Maxx', logo: 'https://i.ibb.co/MBkQVs1/tkmaxx.jpg', description: '', },
        { name: 'Vodafone', logo: 'https://i.ibb.co/Zh1SwbR/Vodafone.png', description: '', },
        { name: 'UKI Innovation Center', logo: 'https://i.ibb.co/1JX4Q9Y/Accenture-innovation.jpg', description: '', },
      ],
      technologies: [ 'C#', 'Angular', 'Node', 'AWS' ],
    },
    {
      company: 'University of Oxford',
      companyUrl: 'https://www.ox.ac.uk/',
      companyLogo: 'https://i.ibb.co/QYmLPTX/oxford-uni.jpg',
      jobTitle: 'Intern',
      datesWorked: 'June 2013 - September 2013',
      responsibilities: 'Worked on developing a Java application which would calculate the most '
        + 'effective mg of antimalarial drug, per kg or patient body weight, to prevent vaccine resistance building up. '
        + 'Involved dealing with millions of patient records, which were often in varying formats and units.',
        projectType: 'Projects',
        projects: [
        { name: 'WWARN', logo: 'https://i.ibb.co/1R657nh/Wwarn.jpg', description: '', },
      ],
      technologies: [ 'Java', 'apachetomcat', 'junit', 'gradle' ],
    },
    {
      company: 'British Army',
      companyUrl: 'https://www.army.mod.uk/',
      companyLogo: 'https://i.ibb.co/gv6mbKw/Army.jpg',
      jobTitle: 'Soldier',
      datesWorked: '',
      responsibilities: '',
      projectType: 'Regiments',
      projects: [
        { name: 'Signals', logo: 'https://i.ibb.co/F5mhzkr/Signals.png', description: '', },
        { name: 'Oxford UOTC', logo: 'https://i.ibb.co/ZMH1TWq/ouotc.jpg', description: '', },
        { name: 'Intelligence Corps', logo: 'https://i.ibb.co/svn2XLq/mi.jpg', description: '', },
      ],
    },
  ],
  projectComplimentaryData: [
    {
      name: 'AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/wgJDXs2/adguardian-banner-2.png',
    },
    {
      name: 'aliciasykes.com',
      thumbnail: 'https://repository-images.githubusercontent.com/165275206/a5fc1f00-f206-11e9-9f21-6e5f696368e7',
    },
    {
      name: 'all-the-countries',
      thumbnail: 'https://repository-images.githubusercontent.com/331389984/ab3f8a8b-a3bc-493c-9f0c-b119ec1575af',
    },
    {
      name: 'anti-theft-charge',
      thumbnail: 'https://i.ibb.co/LZfDXR9/Screenshot-from-2023-10-29-23-51-27.png',
    },
    {
      name: 'awesome-privacy',
      language: 'markdown',
      thumbnail: 'https://repository-images.githubusercontent.com/512269935/6b38d78e-6e4d-484e-bbc8-e0dd81c97e0a',
    },
    {
      name: 'brewfile',
      thumbnail: 'https://i.ibb.co/N9c30xT/lissy93-brewfile-banner.png',
    },
    {
      name: 'bug-bounties',
      thumbnail: 'https://raw.githubusercontent.com/Lissy93/bug-bounties/main/web/public/banner.png',
    },
    {
      name: 'cheat-code',
      thumbnail: 'https://i.ibb.co/3BJNCpg/cheatcode.png',
    },
    {
      name: 'cso',
      thumbnail: 'https://github.com/Lissy93/cso/blob/HEAD/public/banner.png?raw=true',
      language: 'Solid',
    },
    {
      name: 'dashy',
      featured: true,
      thumbnail: 'https://repository-images.githubusercontent.com/343078060/82f850a2-b1af-4e9f-9245-c92700d74856',
    },
    {
      name: 'docker-tcpdump',
      thumbnail: 'https://i.ibb.co/RQyX8kL/docker-tcp-dump.png',
    },
    {
      name: 'dotfiles',
      thumbnail: 'https://i.ibb.co/YyrcjsH/Screenshot-from-2023-12-10-18-19-26.png',
    },
    {
      name: 'email-comparison',
      thumbnail: 'https://i.ibb.co/f8ZfxmW/email-comparison-screenshot.png',
    },
    {
      name: 'espanso-config',
      thumbnail: 'https://repository-images.githubusercontent.com/362820466/b1ef9380-a909-11eb-9d34-2aaf94ed5d95',
    },
    {
      name: 'git-into-open-source',
      thumbnail: 'https://i.ibb.co/Jm8gpBN/git-into-opensource-banner.png',
    },
    {
      name: 'happy-app',
      thumbnail: 'https://repository-images.githubusercontent.com/94193652/5880b180-f208-11e9-9ab5-9f4b86f46017',
    },
    {
      name: 'hasami-shogi',
      thumbnail: 'https://i.ibb.co/vvpw9Yg/upscaled-hasami.jpg',
    },
    {
      name: 'lissy93',
      language: 'markdown',
      thumbnail: 'https://i.ibb.co/TkqZmZ9/Screenshot-from-2023-10-29-23-48-30.png',
    },
    {
      name: 'minesweper',
      thumbnail: 'https://repository-images.githubusercontent.com/19034001/6fff26ca-21ea-4381-bf66-8ceb67bd047a',
    },
    {
      name: 'minimal-terminal-prompt',
      thumbnail: 'https://i.ibb.co/hMMPqPr/minimal-terminal-prompt.png',
    },
    {
      name: 'my-website',
      thumbnail: 'https://i.ibb.co/ZhMTxmR/my-website-banner-image.png',
    },
    {
      name: 'OLD_AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/BykbdjF/Screenshot-from-2023-06-03-22-57-07.png',
    },
    {
      name: 'personal-security-checklist',
      language: 'markdown',
      thumbnail: 'https://i.ibb.co/mTvmYGJ/personal-security-checklist.png',
    },
    {
      name: 'portainer-templates',
      thumbnail: 'https://i.ibb.co/J2g5Czy/portainer-templates-banner.png',
    },
    {
      name: 'revision-quizzes',
      thumbnail: 'https://i.ibb.co/JvCGbYf/revision-quizzes-screenshot.png',
    },
    {
      name: 'sentiment-analysis',
      thumbnail: 'https://i.ibb.co/ysLpBCn/sentiment-analysis-png.png',
    },
    {
      name: 'twitter-sentiment-visualisation',
      thumbnail: 'https://i.ibb.co/W0f10Vv/sentiment-sweep-grid.png',
    },
    {
      name: 'usermonkey',
      thumbnail: 'https://i.ibb.co/hLj9HfR/user-monkey.png',
    },
    {
      name: 'web-check',
      thumbnail: 'https://i.ibb.co/mSz2H3n/web-check-banner.png',
    },
    {
      name: 'who-dat',
      thumbnail: 'https://github.com/Lissy93/who-dat/blob/main/public/who-dat.png?raw=true',
    },
  ],
  postComplimentaryData: [
    {
      postRef: '50 ways to bring in extra cash as a developer',
      thumbnail: 'https://i.ibb.co/DDQBHvL/developer-side-hustles.png',
    },
    {
      postRef: 'CLI tools you cant live without',
      thumbnail: 'https://i.ibb.co/F4THZ2T/cli-tools-banner.png',
    },
    {
      postRef: '20 git commands',
      thumbnail: 'https://i.ibb.co/yqtrTTS/git-commands-banner.png',
    },
    {
      postRef: 'useful css resources',
      thumbnail: 'https://i.ibb.co/CMxy3tz/css-resources-2.png',
    },
    {
      postRef: 'my top 50 windows apps',
      thumbnail: 'https://i.ibb.co/nmPRGgp/open-source-windows-apps.png',
    },
    {
      postRef: 'my top 50 android apps',
      thumbnail: 'https://i.ibb.co/cc8WP4K/App-icons-banner-medium.png',
    },
    {
      postRef: 'pimping up your duckduckgo',
      thumbnail: 'https://i.ibb.co/6XYydtq/Duck-Duck-Go-Themes.png',
    },
    {
      postRef: 'custom styling for listed',
      thumbnail: 'https://i.ibb.co/dMh1y13/listed-dark.png',
    },
    {
      postRef: 'fun with realtime data',
      thumbnail: 'https://i.ibb.co/HqJ77Mf/Fun-with-live-data-banner.png',
    },
    {
      postRef: 'fave youtube chanels',
      thumbnail: 'https://i.ibb.co/185MLZq/youtube-channels-banner.png',
    },
    {
      postRef: 'top 25 raspberry pi projects',
      thumbnail: 'https://i.ibb.co/LP1wZtc/Top-Raspberry-Pi-Projects.png',
    },
    {
      postRef: 'using espanso to boost efficiency',
      thumbnail: 'https://i.ibb.co/6W1Bqyz/espanso-config-banner.png',
    },
    {
      postRef: 'hello world',
      thumbnail: 'https://i.ibb.co/0rfWV1f/DSCN0566-1.jpg',
    },
    {
      postRef: 'dashy a selfhosted homelab dashboard',
      thumbnail: 'https://i.ibb.co/c6kTRch/dashy-theme.png',
    },
    { postRef: '', thumbnail: '' },
  ],
  contact: {
    name: 'Hayan Al-Machnouk',
    email: 'hayan@mshnwq.com',
    website: 'https://mshnwq.com',
    socials: {
      Twitter: 'mshnwq00',
      GitHub: 'Mshnwq',
      LinkedIn: 'hayan-al-machnouk',
      Reddit: 'mshnwq',
      StackOverflow: '21552622/mshnwq',
      KeyBase: 'Mshnwq',
    },
    socialButtonLimit: 6,
    // mailerConfig: {
    //   service_id: 'gmail',
    //   template_id: 'website-contact-form',
    //   user_id: 'user_K6F041q1dQvz8SJLSOZCR',
    //   template_params: {},
    // },
    pgpKeyLink: 'https://keybase.io/mshnwq/pgp_keys.asc?fingerprint=83736ac1763828d8260a91a21073ad7f49bc4421',
    pgpPublicKey: `
      -----BEGIN PGP PUBLIC KEY BLOCK-----
      Comment: https://keybase.io/mshnwq
      Version: Keybase Go 6.2.4 (linux)

      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
      DYIoelirQdJjCEnh1GOCPCIwHDTtu6g5ig==
      =2NzF
      -----END PGP PUBLIC KEY BLOCK-----
`,
  },
  about: {
    intro: 'Just your average dev...',
    bio: [
      "I'm Alicia, a London-based software engineer.",

      `I have a particular interest in privacy-respecting software, as well as security.
      I've carried out a few audits, and authored the initial versions of
      <a href="https://github.com/Lissy93/personal-security-checklist">Personal Security Checklist</a>
      and <a href="https://github.com/Lissy93/awesome-privacy">Awesome Privacy</a>.`,

      `I enjoy going to (<a href="https://notes.aliciasykes.com/p/0s5s3uOtKj">and sometimes winning!</a>) hackathons.
      And if you're London-based, you'll probably have bumped into me at a tech meetup.`,

      `I love Linux, and (imo) have a neat
      <a href="https://github.com/lissy93/dotfiles">dotfiles setup</a> which I'm always tweaking.
      And I have a small homelab, that I'm using to learn more about system administration,
      and host my own services to (attempt to) escape big tech.
      I made <a href="https://github.com/Lissy93/dashy">dashboard app</a> for it.`,

      `For work, I'm a principal software engineer at <a href="https://and.digital/">AND.Digital</a>,
      where I work across various client projects, help to upskill and mentor junior and mid-level
      developers and ensure that the code we're delivering is the best it can be.`,

      `Away from the keyboard, I like sports, hanging out with friends, and going to Church.`,
    ],
    picture: 'https://i.ibb.co/svxHFMD/alicia-sykes-3.jpg',
  },
  techStack: {
    backend: [
      {
        language: 'Python',
        projects: ['RFID', 'Hotel'],
      },
      {
        language: 'Go',
        projects: ['Endpoint Router'],
      },
      {
        language: 'Java',
        projects: ['Chess'],
      },
    ],
    frontend: [
      {
        language: 'Svelte',
        projects: ['my-website'],
      },
      {
        language: 'QT',
        projects: ['web-check'],
      },
      {
        language: 'Flutter',
        projects: ['nfu'],
      },
    ],
    hardware: [
      {
        language: 'C++',
        projects: ['nfu'],
      },
      {
        language: 'Verilog',
        projects: ['nfu'],
      },
      {
        language: 'Assembly',
        projects: ['nfu'],
      },
    ],
    other: [
      {
        language: 'Bash',
        projects: ['dotfiles'],
      },
      {
        language: 'Docker',
        projects: ['', 'dashy'],
      },
      {
        language: 'Config',
        projects: ['dotfiles'],
      },
      {
        language: 'Markdown',
        projects: ['personal-security-checklist'],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Ansible', 'Kubernetes', 'GitHubActions', 'Prometheus', 'Grafana', 'Influx'
    ],
    cloud: [
      'Ubuntu', 'CloudFlare', 'Azure', 'AWS', 'GCP',
    ],
    databases: [
      'PostgreSQL', 'SQLite', 'Redis', 'MySQL',
    ],
    testing: [
      'Jest', 'Puppeteer', 'Cypress',
    ],
    security: [
      'Crowdsec', 'Authelia', 'Nmap', 'Maltego', 'Wireshark',
    ],
    networking: [
      'Headscale', 'Tailscale', 'NginxProxyManager',
    ],
  },
};

export default config;