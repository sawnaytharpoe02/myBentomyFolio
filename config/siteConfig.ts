import React from 'react';

export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4';
export type GridItemType = 'social' | 'project' | 'study' | 'other';
export type GridItemTag =
  | 'map'
  | 'game'
  | 'art'
  | 'progressTitle'
  | 'book'
  | 'edu';

export interface equipments {
  src?: {
    light: string;
    dark: string;
  };
  backgroundImg?: string;
  gameId?: string;
  favHeros?: string[];
  mostUsedRoles?: string[];
}

export interface bookstore {
  cover: string;
  url: string;
}
export interface IGridItems {
  layout: GridItemLayout;
  type: GridItemType;
  tag?: GridItemTag;
  title?: string;
  user?: string;
  description?: string;
  // Social
  icon?: string;
  href?: string;
  bgColor?: string;
  //study
  cornerBtnTitle?: string;
  // other
  path?: string;
  settings?: equipments;
  bookstore?: bookstore[];
}

export const gridItems: IGridItems[] = [
  {
    type: 'other',
    tag: 'game',
    layout: '2x4',
    title: '🔥 Mobile Legends Enthusiast',
    description: '🚀 Let’s conquer battles together in our free time',
    settings: {
      backgroundImg: '/mlbb/mlbbBG.jpg',
      gameId: '674060091',
      favHeros: [
        '/mlbb/heros/velatina.webp',
        '/mlbb/heros/beatrix.webp',
        '/mlbb/heros/irithel.webp',
        '/mlbb/heros/lance.webp',
        '/mlbb/heros/yuzhong.webp',
        '/mlbb/heros/arlot.webp',
      ],
      mostUsedRoles: [
        '/mlbb/roles/Assassin_Icon.webp',
        '/mlbb/roles/Fighter_Icon.webp',
        '/mlbb/roles/Mage_Icon.webp',
        '/mlbb/roles/Marksman_Icon.webp',
      ],
    },
  },
  {
    type: 'other',
    tag: 'map',
    title: 'Where I am from ?',
    description: `No 145. Zion Hill St, Insein. Yangon, Myanmar`,
    layout: '2x4',
    href: 'https://maps.app.goo.gl/S6cpwkiQDNdNHr9P8',
    settings: {
      src: {
        light: '/assets/light_map.png',
        dark: '/assets/dark_map.png',
      },
    },
  },

  {
    type: 'social',
    layout: '1x2',
    title: 'Github',
    user: '@sawnaytharhpoe02',
    href: 'https://github.com/sawnaytharpoe02/',
    icon: 'github',
    bgColor: '#000',
  },
  {
    type: 'social',
    layout: '1x2',
    title: 'Linkedin',
    user: '@sawnaytharpoe',
    href: 'https://www.linkedin.com/in/saw-nay-thar-poe-5a827b256/',
    icon: 'linkedin',
    bgColor: '#0A66C2',
  },
  {
    type: 'social',
    layout: '1x2',
    title: 'Codepen',
    user: '@durallumin02',
    href: 'https://codepen.io/duralumin02',
    icon: 'codepen',
    bgColor: '#f1f1f1',
  },
  {
    type: 'social',
    layout: '1x2',
    title: 'Discord',
    user: '@duralumin6570',
    href: 'https://discord.com/users/612154507199250449',
    icon: 'discord',
    bgColor: '#5865F2',
  },
  {
    type: 'study',
    layout: '2x2',
    tag: 'edu',
    title: 'Meta Back-End Developer Professional Certificate',
    cornerBtnTitle: 'My learning journey',
    user: 'Taught by Meta Staff',
    href: 'https://www.coursera.org/professional-certificates/meta-back-end-developer#testimonials',
    description:
      'Launch your career as a back-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.',
    icon: 'meta',
    bgColor: '#f1f1f1',
  },
  {
    type: 'study',
    layout: '2x2',
    tag: 'edu',
    title: 'Learn React From Scrimba',
    cornerBtnTitle: 'Peace out, course !',
    user: 'Taught by Bob Ziroll',
    href: 'https://scrimba.com/learn/learnreact',
    description:
      'The ultimate React 101 - the perfect starting point for any React beginner. Learn the basics of modern React by solving 140+ interactive coding challenges and building eight fun projects.',
    icon: 'scrimba',
    bgColor: '#DAE6FF',
  },
  {
    type: 'project',
    layout: '2x1',
    tag: 'progressTitle',
    title: 'Whispers from the Shelves',
  },
  {
    type: 'project',
    layout: '2x1',
    tag: 'edu',
    icon: 'github',
    bgColor: '#000',
    href: 'https://github.com/sawnaytharpoe02/laravel-duraBlog',
    title: 'Personal Blog Website',
    description: 'Built with Laravel and TailwindCSS',
  },
  {
    type: 'project',
    layout: '2x1',
    tag: 'edu',
    icon: 'github',
    bgColor: '#000',
    href: 'https://github.com/sawnaytharpoe02/TaskMng_ReactNode',
    title: 'Task Management System',
    description: 'Built with NodeJS and ReactJS',
  },
  {
    type: 'other',
    layout: '2x4',
    tag: 'book',
    bookstore: [
      {
        cover: '/bookstore/1.png',
        url: 'https://www.amazon.com/Node-js-Design-Patterns-production-grade-applications/dp/1839214112/ref=sr_1_1?crid=3TQAEFDWPFY6K&keywords=nodejs+design+patterns&qid=1703339496&sprefix=dis%2Caps%2C2649&sr=8-1',
      },
      {
        cover: '/bookstore/2.png',
        url: 'https://www.amazon.com/Pro-MERN-Stack-Development-Express/dp/1484243900/ref=sr_1_1?crid=2YCNUKKONDZNP&keywords=pro+mern+stack&qid=1703339527&sprefix=pro+mern+st%2Caps%2C617&sr=8-1',
      },
      {
        cover: '/bookstore/3.png',
        url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?crid=2VS5WYYU8BC08&keywords=clean+code+robert+c+martin&qid=1703339569&sprefix=clean+code+robert+%2Caps%2C548&sr=8-1',
      },
      {
        cover: '/bookstore/4.png',
        url: 'https://www.amazon.com/Distributed-Systems-Node-js-Building-Enterprise-Ready/dp/1492077291/ref=sr_1_1?crid=1XOOH21Z6YHE&keywords=Distributed+Systems+with+Node.js%3A+Building+Enterprise-Ready+Backend+Services&qid=1703339149&sprefix=distributed+systems+with+node.js+building+enterprise-ready+backend+services%2Caps%2C662&sr=8-1',
      },
    ],
  },
  {
    type: 'other',
    tag: 'art',
    layout: '2x4',
    path: 'd5k81lz1ocfsgj9swrbj',
  },
];

export const siteConfig = {
  items: gridItems,
  author: 'Saw Nay Thar Poe',
  mail: 'sawnaytharhpoe02@gmail.com',
};
