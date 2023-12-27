import React, { useRef } from 'react';
import { IGridItems } from '@/config/siteConfig';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Art = ({ item }: { item: IGridItems }) => {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return item.layout === '2x4' || item.layout === '2x2' ? (
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
  ) : (
    <Image
      src={item.path ?? ''}
      alt="art_gallery"
      layout="fill"
      objectFit="cover"
      priority
      loading="eager"
      placeholder="blur"
      blurDataURL={item.path ?? ''}
    />
  );
};

export default Art;
