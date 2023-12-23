'use client';

import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import { CldVideoPlayer } from 'next-cloudinary';

const Art = ({ item }: { item: IGridItems }) => {
  return (
    <div className="w-full h-full">
      <CldVideoPlayer
        width="100%"
        height="100%"
        src={item.path ?? ''}
      />
    </div>
  );
};

export default Art;
