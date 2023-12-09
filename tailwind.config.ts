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
        blight: '#f5f3f7',
        bdark: '#0a080c',
        primary: '#925fb4',
        secondary: '#c097dd',
        accent: '#a65add',
        dprimary: '#7e4ba0',
        dsecondary: '#4b2268',
        daccent: '#6e22a5',
      },
      fontFamily: {
        sans: ['var(--font-googleSans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
