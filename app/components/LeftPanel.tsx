'use client';

import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';

const LeftPanel = () => {
  const { theme } = useTheme();

  return (
    <div className="basis-1/3 py-10">
      {/* profile avatar */}
      <Image
        src="/assets/pf_pic.webp"
        alt="profile"
        width={120}
        height={120}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="/assets/pf_pic.webp"
        style={{ borderRadius: '50%' }}
      />
      {/* left article */}
      <div className="mt-6 space-y-2">
        <p className="text-4xl font-bold">{siteConfig.author}</p>
        <RoughNotationGroup show={true}>
          <p className="text-[1.05rem] leading-relaxed tracking-wider text-neutral-800 dark:text-neutral-300">
            A meticulous{' '}
            <RoughNotation
              type="highlight"
              color={theme === 'dark' ? '#6e22a5' : '#c097dd'}
              strokeWidth={1}>
              <span>junior web developer</span>
            </RoughNotation>{' '}
            with a robust love for coffee{' '}
            <img className="inline" src="/assets/Coffee.png" width={30} />, delving
            into the{' '}
            <RoughNotation
              type="highlight"
              color={theme === 'dark' ? '#069082' : '#6edacf'}
              strokeWidth={1}>
              <span>backend's</span>
            </RoughNotation>{' '}
            enchanting realms .
            <img className="inline mr-1" src="/assets/Mail.png" width={25} />
            Open to new connections and collaborations—
            <RoughNotation
              type="underline"
              color={theme === 'dark' ? '#E8E9F3' : '#1C1C27'}
              strokeWidth={1}>
              <a href={`mailto:${siteConfig.mail}`}>let's connect !!</a>
            </RoughNotation>
          </p>
        </RoughNotationGroup>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-neutral-200 dark:border-neutral-900 mt-6 pt-4">
        <p className="text-neutral-800 text-sm tracking-wider dark:text-neutral-400">
          Designed and coded with love's fiery touch. ❤️‍🔥
        </p>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default LeftPanel;
