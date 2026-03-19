import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  airvica,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  drstavrou,
  fusiovan,
  vanish,
  movinator,
  game,
  dice,
  mapty,
  bankist,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: movinator,
    theme: 'btn-back-purple',
    name: 'Movinator',
    description: `A movies site. Find movies you'll enjoy without the hassle.`,
    link: 'https://d-i-m-i.github.io/movinator/',
  },
  {
    iconUrl: drstavrou,
    theme: 'btn-back-blue',
    name: `Dr Antonio Stavrou`,
    description:
      'Developed the personal website for the GP practice of Dr Antonio Stavrou.',
    link: 'https://drantoniostavrou.com/',
  },
  {
    iconUrl: airvica,
    theme: 'btn-back-green',
    name: 'AirVica',
    description:
      'Airborne Virus Risk Calculator - Contributed to this collaborative project between Cardiff and Oxford Universities by designing and front-end developing the UI interface of the project.',
    link: 'https://people.maths.ox.ac.uk/griffit4/Airborne_Transmission/index.html',
  },
  {
    iconUrl: fusiovan,
    theme: 'btn-back-blue',
    name: 'FusioVan',
    description:
      'A web-app to help DIY campervan builders design the electrical system of their van.',
    link: 'https://github.com/D-i-m-i/fusiovan',
  },
  {
    iconUrl: vanish,
    theme: 'btn-back-pink',
    name: 'Vanish',
    description: 'Camper vans marketplace.',
    link: 'https://github.com/D-i-m-i/vanish',
  },
  {
    iconUrl: dice,
    theme: 'btn-back-pink',
    name: 'First-to-100',
    description: `A fun game 2-player dice game. First to 100 wins. If you roll a 1 you lose your current score and turn! Copyright: Jonas Schmedtman.`,
    link: 'https://d-i-m-i.github.io/first-to-100-game/',
  },
  {
    iconUrl: game,
    theme: 'btn-back-black',
    name: 'Guess-the-Number',
    description: `A fun game where the aim is to guess the number in the least possible number of tries. What's your high score? Copyright: Jonas Schmedtman.`,
    link: 'https://d-i-m-i.github.io/guessthenumbergame/',
  },
  {
    iconUrl: mapty,
    theme: 'btn-back-green',
    name: 'Mapty',
    description: `Sports activities logged on a map. Copyright: Jonas Schmedtman.`,
    link: 'https://d-i-m-i.github.io/mapty/',
  },
  {
    iconUrl: bankist,
    theme: 'btn-back-black',
    name: 'Bankist',
    description: `Dummy bank website. Copyright: Jonas Schmedtman.`,
    link: 'https://d-i-m-i.github.io/bankist/',
  },
];
