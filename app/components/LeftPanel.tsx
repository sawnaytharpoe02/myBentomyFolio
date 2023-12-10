'use client';

import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';

const LeftPanel = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="basis-1/3">
      {/* profile avatar */}
      <Image
        src="/profile.jpg"
        alt="profile"
        width={120}
        height={120}
        loading="eager"
        priority
        blurDataURL="/profile.jpg"
        placeholder="blur"
        style={{ borderRadius: '50%' }}
      />
      {/* left article */}
      <div className="mt-6 space-y-2">
        <p className="text-4xl font-bold">{siteConfig.author}</p>
        <RoughNotationGroup show={true}>
          <p className="text-[1.05rem] leading-relaxed tracking-wider text-neutral-700 dark:text-neutral-400">
            A meticulous{' '}
            <RoughNotation type="highlight" color="#c097dd" strokeWidth={1}>
              <span className="dark:text-tlight">junior web developer</span>
            </RoughNotation>{' '}
            with a robust love for coffee{' '}
            <img className="inline" src="/Coffee.png" width={30} />, delving
            into the{' '}
            <RoughNotation type="highlight" color="#6edacf" strokeWidth={1}>
              <span className="dark:text-tlight">backend's</span>
            </RoughNotation>{' '}
            enchanting realms .
            <img className="inline mr-1" src="/Mail.png" width={25} />
            Open to new connections and collaborations—
            <RoughNotation type="highlight" strokeWidth={1} color="#c5efc3">
              <a
                href={`mailto:${siteConfig.mail}`}
                className="dark:text-tlight">
                let's connect
              </a>
            </RoughNotation>
          </p>
        </RoughNotationGroup>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-neutral-200 dark:border-neutral-900 mt-6 pt-4">
        <p className="text-neutral-700 tracking-wider dark:text-neutral-400">
          Designed and coded with love's fiery touch. ❤️‍🔥
        </p>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default LeftPanel;
