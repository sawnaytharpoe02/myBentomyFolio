export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4';
export type GridItemType = 'social' | 'project' | 'study' | 'other';
export interface mlbbGame {
  backgroundImg: string;
  gameId: string;
  favHeros: string[];
  mostUsedRoles: string[];
}
export interface IGridItems {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  user?: string;
  description?: string;
  // Social
  icon?: string;
  href?: string;
  bgColor?: string;
  // other
  settings?: mlbbGame;
}

export const gridItems: IGridItems[] = [
  {
    type: 'other',
    layout: '2x4',
    title: '🔥 Mobile Legends Enthusiast',
    description: '🚀 Let’s conquer battles together during our free time',
    settings: {
      backgroundImg: '/mlbb/mlbbBG.jpg',
      gameId: '674060091',
      favHeros: [
        '/mlbb/velatina.webp',
        '/mlbb/beatrix.webp',
        '/mlbb/irithel.webp',
        '/mlbb/lance.webp',
        '/mlbb/yuzhong.webp',
        '/mlbb/arlot.webp',
      ],
      mostUsedRoles: [
        '/mlbb/Assassin_Icon.webp',
        '/mlbb/Fighter_Icon.webp',
        '/mlbb/Mage_Icon.webp',
        '/mlbb/Marksman_Icon.webp',
      ],
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
];

export const siteConfig = {
  items: gridItems,
  author: 'Saw Nay Thar Poe',
  mail: 'sawnaytharhpoe02@gmail.com',
};
