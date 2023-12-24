'use client';

import React, { useRef } from 'react';
import { IGridItems } from '@/config/siteConfig';
import { useInView } from 'react-intersection-observer';

const Art = ({ item }: { item: IGridItems }) => {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="relative w-full h-full" ref={ref}>
      {inView && (
        <video
          ref={videoRef}
          className="absolute w-full h-full inset-0 object-cover"
          src={require(`../../../public/${item.path}`)}
          autoPlay
          muted
          loop
          preload="auto"
        />
      )}
    </div>
  );
};

export default Art;
