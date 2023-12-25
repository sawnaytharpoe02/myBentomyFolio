import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Map = ({ item }: { item: IGridItems }) => {
  const address = item.description?.split(',');
  const { theme } = useTheme();
  return (
    <Link href={item.href ?? ''} target="_blank">
      <div className='absolute w-full h-full'>
        <Image
          className="cursor-pointer"
          src={
            theme === 'dark'
              ? item.settings?.src?.dark || ''
              : item.settings?.src?.light || ''
          }
          layout="fill"
          objectFit="cover"
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
          alt="where_I_am_from"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={
            theme === 'dark'
              ? item.settings?.src?.dark || ''
              : item.settings?.src?.light || ''
          }
        />
      </div>
      {/* map address */}
      <div className="relative z-20 font-medium">
        <h3 className="absolute text-sm right-5 top-5 bg-neutral-50 dark:bg-neutral-900 w-fit px-2 py-1 rounded-lg">
          {item.title}
        </h3>
        <div className="absolute flex flex-col gap-2 top-72 left-14">
          {address?.map((row, index) => (
            <p
              key={index}
              className="text-sm flex items-center bg-neutral-50 dark:bg-neutral-900 w-fit px-2 py-1 rounded-lg">
              {row}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Map;
