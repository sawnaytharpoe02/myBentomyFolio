'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button className='relative flex' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Moon size={16} className='absolute transition-all scale-100 dark:scale-0'/>
      <Sun size={16} className='transition-all scale-0 rotate-0 dark:scale-100 dark:rotate-90'/>
    </button>
  );
};

export default ThemeSwitcher;
