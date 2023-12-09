'use client';

import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
        <p className="text-xl text-primary dark:text-dprimary">
          {siteConfig.position}
        </p>
        <p className="text-4xl font-bold">{siteConfig.name}</p>
        <p className="text-neutral-700 dark:text-neutral-400">
          " A meticulous junior web developer with an unwavering passion for
          coffee <img className="inline" src="/Coffee.png" width={30} />, fueled
          by an insatiable love for JavaScript. I'm always open to new
          connections and collaborations.{' '}
          <img className="inline mr-1" src="/Mail.png" width={30} />
          <a href={`mailto:${siteConfig.mail}`} className='underline decoration-1 decoration-wavy underline-offset-1 decoration-daccent'>Feel free to reach out</a>—I'd love to connect with you! "
        </p>
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center border-t border-neutral-200 dark:border-neutral-900 mt-6 pt-6">
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Built by @sntpdev | ©2023 sntpdev. All Rights Reserved
        </p>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default LeftPanel;
