import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Hayan Al-Machnouk',
  nickname: 'Mshnwq',
  description: '',
  source: 'https://github.com/Mshnwq/mshnwq-website',
  baseUrl: 'https://mshnwq.com',
  initialFeeds: [
    { 
      label: 'Mshnwq Blog', 
      url: 'https://blog.mshnwq.com/index.xml'
      //url: 'http://localhost:1313/index.xml'
      // url: 'http://localhost:1313/index.json'
      // url: 'https://notes.aliciasykes.com/feed'
    }
  ],
  additionalFeeds: [
    { 
      label: 'Mshnwq Blog', 
      url: 'https://blog.mshnwq.com/index.xml'
      // url: 'http://localhost:1313/index.xml'
    },
    // { 
    //   label: 'Alicia Blog', 
    //   // url: 'https://blog.mshnwq.com/feed'
    //   url: 'https://notes.aliciasykes.com/feed'
    // },
  ],
  routeLinks: [
    { label: 'Home',
      route: '/',
      color: 'var(--accent-1)' },
    {
      label: 'Blog',
      route: '/blog',
      color: 'var(--accent-2)',
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
      color: 'var(--accent-3)',
      description: 'Bio and professional experience',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-4)',
      description: 'Social profile links, GPG keys and contact form',
    },
  ],
  footerInfo: {
    author: 'Hayan Al-Machnouk',
    authorSite: 'https://github.com/Mshnwq',
    license: 'MIT',
    licenseLink: 'https://github.com/Mshnwq/mshnwq-website/blob/main/LICENSE.md',
    copyright: true,
  },
  githubUser: 'Mshnwq',
  defaultTheme: 'matrix',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      background: '#101010',
      foreground: '#fafafa',
      'dimmed-text': '#808080',
      'card-background': '#1b1b1b',
      'card-border': '1px solid #2a2a2a',
      // accent: '#01c0f0',
      'accent-1': '#f44336',
      'accent-2': '#1de691',
      'accent-3': '#01c0f0',
      'accent-4': '#b45eff',
      'home-accent-background': '#6a77c4',
      'home-accent-foreground': 'var(--foreground)',
      'matrix-effect-background': 'rgba(16, 16, 16, 0.05)',
      'matrix-effect-text': 'var(--foreground)',
    },
    light: {
      background: '#ededed',
      foreground: '#2a3367',
      'card-background': '#F8F8FF',
      'card-border': '1px solid #0000001a',
      // accent: '#01c0f0',
      'accent-1': '#f44336',
      'accent-2': '#10d984',
      'accent-3': '#09b2dc',
      'accent-4': '#a450ee',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
      'matrix-effect-background': 'rgba(237, 237, 237, 0.05)',
      'matrix-effect-text': 'var(--foreground)',
    },
    matrix: {
      background: '#020204',
      foreground: '#b3f4bf',
      'dimmed-text': '#92e5a1',
      'card-background': '#03110a',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#22b455',
      'accent-2': '#22b455',
      'accent-3': '#22b455',
      'accent-4': '#22b455',
      'home-accent-background': '#80ce87',
      'home-tile-background': '#03110a',
      'matrix-effect-background': 'rgba(16, 16, 16, 0.05)',
      'matrix-effect-text': '#36ba01',
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
      'matrix-effect-text': '#00A080',
    },
    crimson: {
      background: '#101010',
      foreground: '#bcbcbc',
      'dimmed-text': '#8892b0',
      'card-background': '#1a1010',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#a30c09',
      'accent-2': '#a30c09',
      'accent-3': '#a30c09',
      'accent-4': '#a30c09',
      'home-accent-background': '#bcbcbc',
      'home-tile-background': '#2b1010',
      'matrix-effect-background': 'rgba(16, 16, 16, 0.05)',
      'matrix-effect-text': '#b40c0c',
    },
  },
  workExperience: [
    {
      company: 'Modern Hamat',
      companyUrl: 'https://modernhamat.com',
      companyLogo: 'https://i.ibb.co/Brc9Wmj/hamat.png',
      jobTitle: 'Head of Information Technology',
      datesWorked: 'Jun 2023 - Dec 2023',
      responsibilities: 'Led the establishment and optimizated its IT infrastructure, encompassing network, '
                      + 'server, email, storage and ERP system setup and implementation, Dockerized server '
                      + 'infrastructure with data migration and automated backups, custom Odoo modules '
                      + 'integration and development, VPN centralized storage setup with security protocols, '
                      + 'and the creation of dashboards for metrics visualization.',
      // projects: [
        // { name: 'Self Hosted ERP System V2', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', description: '', },
        // { name: 'Self Hosted ERP System V3', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', description: '', },
      // ],
      technologies: [
        'Python', 
        'Go', 
        'Odoo', 
        'Ubuntu', 
        'Docker', 
        'AWS',
        'Tmux',
        'Crowdsec', 
        'Authelia', 
        'Wireguard', 
        'Nginx', 
        'Grafana', 
        'Prometheus', 
        'InfluxDB', 
      ],
    },
    {
      company: 'Nobles International School',
      companyUrl: 'https://nis-jeddah.com',
      companyLogo: 'https://i.ibb.co/42Js6Bp/nis.png',
      jobTitle: 'Freelancer',
      datesWorked: 'Sep 2023 - Oct 2023',
      responsibilities: 'Installed ERP System and Integrated Fingerprint Device with Odoo HR Module',
      technologies: [
        'Python',
        'Docker', 
        'Wireguard', 
        'Odoo', 
      ],
    },
    {
      company: 'Axis International Contracting',
      companyUrl: 'https://al-mihwar.com',
      companyLogo: 'https://i.ibb.co/wcbCW5q/axis.png',
      jobTitle: 'Freelancer',
      datesWorked: 'Jul 2023 - Aug 2023',
      responsibilities: 'Worked on automating tender Project Managment Software',
      technologies: [
        'Python',
        'Pandas',
        'GraphQL',
        'Selenium',
        'Excel',
      ],
    },
    {
      company: 'SCFS',
      companyUrl: 'http://www.scfs.tech',
      companyLogo: 'https://i.ibb.co/H4CnnGv/scfs.webp',
      jobTitle: 'Embedded Systems Engineer',
      datesWorked: 'Jun 2022 - Jun 2023',
      responsibilities: 'As a small startup team, where I was developing the embedded systems '
                      + 'cross-platform mobile applications, integrated hardware devices, '
                      + 'some backend systems and helped database design, where the projects involved supermarkets and an airport.',
      projects: [
        { name: 'Smart Cart', logo: 'https://i.ibb.co/pXLT815/cart.webp', description: '', },
        { name: 'Dullani', logo: 'https://i.ibb.co/D7bvLm3/dullani.png', description: '', },
        // { name: 'Hotel Door Event System', logo: 'https://i.ibb.co/SyjxvhT/Futr-ai.png', description: '', },
        // { name: 'RFID Tracking System', logo: 'https://i.ibb.co/SyjxvhT/Futr-ai.png', description: '', },
      ],
      technologies: [
        'Flutter',
        'Python', 
        'FastAPI', 
        'PostgreSQL', 
        'C++', 
        'QT',
        'ESP32', 
        'MQTT',
      ],
    },
    {
      company: 'Data Glaciar',
      companyUrl: 'https://www.dataglacier.org',
      companyLogo: 'https://i.ibb.co/HFqbvCw/data-glaciers.png',
      jobTitle: 'NLP and Industrial training Intern',
      datesWorked: 'Jun 2022 - Dec 2022',
      responsibilities: 'Gained hands-on experience in software project management, '
                      + 'by successfully completing an end-to-end machine learning group project',
      projects: [
        { name: 'Halaqh', logo: 'https://i.ibb.co/0ncKjFN/halaqh.png', url: 'https://devpost.com/software/halaqh-platform', description: '', },
      ],
      technologies: [
        'Python', 
        'Flask', 
        'Heroku',
        'Streamlit',
        'Docker', 
        'AWS',
        'Git', 
      ],
    },
    {
      company: 'Zaka',
      companyUrl: 'https://zaka.ai',
      companyLogo: 'https://i.ibb.co/VpsZhgG/zaka.webp',
      jobTitle: 'Artificial Intelligence Intern',
      datesWorked: 'Mar 2021 - Jun 2021',
      responsibilities: 'Nano degree program in Data Science and AI with certifications from Microsoft,'
                      + 'developing a Psychiatrist Chatbot machine learning model, utilizing' 
                      + 'Pandas, Numpy, Matplotlib, and Regular Expression Python libraries.',
      // projectType: 'Projects',
      // projects: [
        // { name: 'Psychiatrist bot', logo: 'https://i.ibb.co/1R657nh/Wwarn.jpg', description: '', },
      // ],
      technologies: [
        'Python',
        'Numpy',
        'Pandas',
        'Azure',
      ],
    },
    {
      company: 'Smart Methods',
      companyUrl: 'https://s-m.com.sa',
      companyLogo: 'https://i.ibb.co/pyKnP7Q/smart-methods.png',
      jobTitle: 'Computer Engineering Intern',
      datesWorked: 'Nov 2020 - Dec 2020',
      responsibilities: 'Robotics simulation and development with electronics and AI specialization',
      technologies: [
        'Ubuntu', 
        'ROS',
        'Multisim',
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
      DockerHub: 'mshnwq',
    },
    socialButtonLimit: 7,
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
    intro: 'Just a tech enthusiast...',
    bio: [
      `Hi, I'm Hayan, a recent computer engineering graduate with a degree that focused on hardware,
      embedded systems, and software development.`,

      `After graduation, I began working in infrastructure and IT systems, 
      delving deep into Linux, cloud computing, and system administration. 
      I quickly found my niche and became a Co-Founder of <a href="https://nyrna-sa.com">Nyrna</a> an ERP consultancy, 
      leveraging my expertise to streamline business operations.
      Additionally, I'm Co-Founder and CTO at <a href="https://taskmasters-sa.com">Taskmasters</a> a consulting firm, 
      where I oversee technology strategies within the groups holdings.`,

      `I love Linux and the open source community, specially security and privacy-respecting software. You can find my
      <a href="https://github.com/Mshnwq/dotfiles">dotfiles setup</a> which I'm always tweaking to improve and master my toolkit.
      I also maintain a small homelab to enhance my system administration skills and host services for privacy and security reasons. 
      Some of my open-source projects include <a href="https://github.com/Mshnwq/Metallum-Extractor">Metallum API</a>, <a href="https://devpost.com/software/halaqh-platform">Halaqh</a>, and <a href="https://github.com/Mshnwq/Cryptography-KAU">KAU Cryptography</a>.
      In my free time, I enjoy sharing what I'v learned on my <a href="https://blog.mshnwq.com">Blog</a> aswell.`, 

      `Beyond tech, I'm a (cine-biblio-audio)phile, and a health nut :)`,
    ],
    picture: 'https://i.ibb.co/Rvxbdmd/profile-crop.jpg',
  },
  techStack: {
    backend: [
      {
        language: 'Python',
        projects: [
          'RFID', 
          'Excel-Scripts',
          'Cryptography-KAU', 
          'Metallum-Extractor', 
        ],
      },
      {
        language: 'Go',
        projects: [
          'Endpoint-Router',
        ],
      },
      {
        language: 'Java',
        projects: [
          'Java-university',
        ],
      },
    ],
    frontend: [
      {
        language: 'Svelte',
        projects: [
          'Mshnwq-Website',
        ],
      },
      {
        language: 'QT',
        projects: [
          'Metallum-Extractor', 
          'Shopping-Cart-App',
        ],
      },
      {
        language: 'Flutter',
        projects: [
          'Shopping-Cart-App',
        ],
      },
    ],
    hardware: [
      {
        language: 'C++',
        projects: [
          'Golden-Rat', 
          'Minix3-Project',
          'Shopping-Cart-Embedded',
        ],
      },
      {
        language: 'Verilog',
        projects: [
          'FPGA-RSA-UHF-RFID',
        ],
      },
      {
        language: 'Assembly',
        projects: [
          'Logisim',
        ],
      },
    ],
    other: [
      {
        language: 'Bash',
        projects: [
          'dotfiles',
        ],
      },
      {
        language: 'Docker',
        projects: [
          'Endpoint-Router',
          'Mshnwq-Website',
        ],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Ansible', 
      'Kubernetes', 
      'GitHubActions', 
      'Grafana', 
      'Prometheus', 
      'InfluxDB',
    ],
    server: [
      'Ubuntu', 
      'CloudFlare', 
      'Azure', 
      'AWS',
      'Nginx',
      'NginxProxyManager',
    ],
    databases: [
      'PostgreSQL', 
      'SQLite', 
      'Redis', 
      // 'MySQL',
      // 'MariaDB',
    ],
    testing: [
      'Jest', 
      'Puppeteer', 
      'Cypress',
    ],
    security: [
      'Crowdsec', 
      'Authelia', 
      'Wireshark',
    ],
    networking: [
      'Wireguard', 
      // 'Headscale', 
      // 'Tailscale', 
      'MQTT', 
      'Mosquitto', 
    ],
  },
};

export default config;
