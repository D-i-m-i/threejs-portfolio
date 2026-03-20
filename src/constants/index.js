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
  nodejs,
  react,
  tailwindcss,
  drstavrou,
  fusiovan,
  vanish,
  movinator,
  game,
  dice,
  mapty,
  bankist,
  python,
  rails,
  postgresql,
  linux,
  figma,
  freelancer,
  codetoday,
  lewagon,
  oxford,
  paradigmshift,
  ford,
  hackerspace,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  {
    imageUrl: rails,
    name: 'Rails',
    type: 'Backend',
  },
  {
    imageUrl: postgresql,
    name: 'Postgresql',
    type: 'Database',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
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
    imageUrl: linux,
    name: 'Linux',
    type: 'Operating System',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'Design',
  },
];

export const experiences = [
  {
    title: 'Freelance Software Developer',
    company_name: '',
    icon: freelancer,
    iconBg: '#ffffff',
    date: 'July 2022 - Present',
    points: [
      'Developed a number of software projects',
      'Taught programming as a coding instructor and a teaching assistant',
    ],
  },
  {
    title: 'Python Coding Instructor',
    company_name: 'Codetoday',
    icon: codetoday,
    iconBg: '#ffffff',
    date: 'Feb 2023 - Sep 2023',
    points: [
      'Taught coding to children and teenagers ages 7-16',
      'Modules taught: Python, NumPy, Matplotlib',
    ],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'Le Wagon',
    icon: lewagon,
    iconBg: '#ffffff',
    date: 'Jan 2023 - Feb 2023',
    points: [
      'Guided and supported Le Wagon students in solving programming problems in Ruby, Ruby on Rails, SQL, HTML and CSS',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'University of Oxford',
    icon: oxford,
    iconBg: '#ffffff',
    date: 'Jan 2023 - Present',
    points: [
      'Carried out the Front-End design and programming of a mathematical modelling research project',
      'Figma, HTML, CSS and JavaScript',
    ],
  },
  {
    title: 'Innovation Engineer',
    company_name: 'Paradigm Shift (RTD) Ltd',
    icon: paradigmshift,
    iconBg: '#ffffff',
    date: 'Jan 2021 - Jan 2022',
    points: [
      'Worked on 3 innovative projects in health, energy and security',
      '3D modelling, prototyping, patents analysis and R&D activities',
    ],
  },
  {
    title: 'Gauging Engineer - Manufacturing',
    company_name: 'Ford Motor Company',
    icon: ford,
    iconBg: '#ffffff',
    date: 'May 2014 - June 2019',
    points: [
      'Successfully delivered 3 new engine programmes, including the award winning 1.0L 3-cylinder EcoBoost engine',
    ],
  },
  {
    title: 'Co-founder',
    company_name: 'Limassol Hackerspace',
    icon: hackerspace,
    iconBg: '#ffffff',
    date: 'Nov 2013 - June 2017',
    points: ['Conceptualised and set-up the first Hackerspace of the city'],
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
