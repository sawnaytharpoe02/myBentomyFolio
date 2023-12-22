import React from 'react';

export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4';
export type GridItemType = 'social' | 'project' | 'study' | 'other';
export type GridItemTag = 'map' | 'game' | 'art' | 'design' | 'book' | 'edu';

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
  // other
  settings?: equipments;
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
    layout: '2x1',
    tag: 'edu',
    title: 'Meta Back-End Developer Professional Certificate',
    user: 'Taught by Meta Staff',
    href: 'https://www.coursera.org/professional-certificates/meta-back-end-developer#testimonials',
    description:
      'Launch your career as a back-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.',
    icon: 'meta',
    bgColor: '#f1f1f1',
  },
  {
    type: 'study',
    layout: '2x1',
    tag: 'book',
    title: 'Whispers from the Shelves',
  },
];

export const siteConfig = {
  items: gridItems,
  author: 'Saw Nay Thar Poe',
  mail: 'sawnaytharhpoe02@gmail.com',
};
