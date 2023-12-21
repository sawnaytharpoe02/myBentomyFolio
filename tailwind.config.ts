import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        tlight: '#080708',
        tdark: '#f8f7f8',
        blight: '#ffffff',
        bdark: '#0a080c',
        primary: '#925fb4',
        secondary: '#c097dd',
        accent: '#a65add',
        dprimary: '#7e4ba0',
        dsecondary: '#4b2268',
        daccent: '#6e22a5',
      },
      boxShadow: {
        border: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
      },
      fontFamily: {
        sans: ['var(--font-googleSans)'],
      },
      backgroundImage: {
        'light-grid': "url('/assets/light-pattern.svg')",
        'dark-grid': "url('/assets/dark-pattern.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        verySmall: '0.5rem',
        3: '3rem',
        2: '2rem',
        1: '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
