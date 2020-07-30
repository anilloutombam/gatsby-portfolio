import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anil Loutombam',
  subtitle: 'I like to make stuff with code',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'anil.jpg',
  paragraphOne:
    'I am a Web Developer with enthusiasm and focus on Frontend Development and Backend Development',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.',
  paragraphThree: 'Feel free to contact me via email at any time',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vRAvq_b_90TwiinxfaK633wLs5IbOlwr2HTdQIKhQgp0PBp6p3FHGCPw0B7Wm_x2Hi8IoJVS4sksrQ3/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'The-Rook-India-Co-Working-Beyond.png',
    title: 'The Rook India',
    info: 'Created with Love and Care for Co-working Space',
    info2: 'I used OctoberCMS and Laravel in order to create this website',
    url: 'https://www.therookindia.com/',
  },
  {
    id: nanoid(),
    img: 'Customer-Care-Suport.png',
    title: 'Customer Care Support',
    info:
      'This is a web portal for home services where users can make a booking and admin can manage the leads and update the leads status. ',
    info2: 'Admin can assign the leads to the relevant vendors.',
    url: 'https://www.customercaresupport.com/',
  },
  {
    id: nanoid(),
    img: 'Prajyukttam.png',
    title: 'Prajyuktam 2018 Official Website',
    info:
      'Prajyukttam is the annual techno-fest organized by School Of Technology, Assam Don Bosco University, Azara.',
    info2: '',
    repo: 'https://github.com/anilloutombam/prajyukttam-2018', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to buy me a coffee or hire me ? Awesome!',
  btn: 'Hire Me!',
  email: 'nlkr50@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Anilloutombam',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@anilloutombam',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anil-loutombam/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anilloutombam',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
