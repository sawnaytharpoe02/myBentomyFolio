import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';

const Game = ({ item }: { item: IGridItems }) => {
  return (
    <div className="relative flex flex-col rounded-3xl w-full h-full overflow-hidden">
      {/* overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-neutral-800/70 to-neutral-800/90"></div>
      {/* bg img */}
      <div className="absolute w-full h-full">
        <Image
          src={item?.settings?.backgroundImg ?? ''}
          alt="heroImg"
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={item?.settings?.backgroundImg ?? ''}
        />
      </div>
      {/* inner content */}
      <div className="w-full h-full z-20 flex items-end p-7 font-medium">
        <div className="flex gap-4 flex-wrap">
          <h3 className="text-sm bg-neutral-50 dark:bg-neutral-900 w-fit px-2 py-1 rounded-lg">
            {item.title}
          </h3>
          <div className="text-sm flex items-center bg-neutral-50 dark:bg-neutral-900 px-2 py-1 rounded-lg">
            {item.description}
          </div>
          <div className="flex gap-2 items-center bg-neutral-50 dark:bg-neutral-900 px-2 py-1 w-fit rounded-lg">
            <p className="text-sm">Pick Role</p>
            {item.settings?.mostUsedRoles?.map((role, index) => (
              <div
                key={index}
                className="w-fit h-fit bg-neutral-950/90 rounded-full">
                <Image
                  src={role}
                  alt="role_img"
                  width={20}
                  height={20}
                  priority
                  loading="eager"
                  placeholder='blur'
                  blurDataURL={role}
                />
              </div>
            ))}
          </div>
          <div className="text-sm flex items-center bg-neutral-50 dark:bg-neutral-900 px-2 py-1 rounded-lg">
            ID{item?.settings?.gameId}
          </div>
          <div className="flex gap-2 items-center bg-neutral-50 dark:bg-neutral-900 px-2 py-1 w-fit rounded-lg">
            <p className="text-sm">Fav Heros</p>
            {item.settings?.favHeros?.map((hero, index) => (
              <div key={index} className="w-fit h-fit rounded-full">
                <Image
                  src={hero}
                  alt="role_img"
                  width={20}
                  height={20}
                  priority
                  loading="eager"
                  placeholder='blur'
                  blurDataURL={hero}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
