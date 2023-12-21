import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';

const Other = ({ item }: { item: IGridItems }) => {
  console.log(item);
  return (
    <div className="relative flex flex-col rounded-3xl w-full h-full overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/70 to-neutral-950/90"></div>
      {/* bg img */}
      <div className="absolute w-full h-full">
        <Image
          src={item.settings?.backgroundImg ?? ''}
          alt="heroImg"
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={item.settings?.backgroundImg ?? ''}
        />
      </div>
      {/* inner content */}
      <div className="w-full h-full z-20 flex items-end p-5">
        <div className="flex flex-col space-y-3 text-tdark">
          <h3 className="text-md bg-neutral-50 text-tlight dark:text-tdark dark:bg-neutral-950/90 w-fit px-2 py-1 rounded-full mt-2">
            {item.title}
            <span className="text-sm"> ( ID:{item.settings?.gameId} )</span>
          </h3>
          <div className="text-sm bg-neutral-950/90 px-1 py-1 rounded-full mt-2">
            {item.description}
          </div>
          <div className="flex gap-2 items-center bg-neutral-950/70 px-2 py-1 w-fit rounded-full mt-2">
            <p className="text-sm">Most pick role</p>
            {item.settings?.mostUsedRoles?.map((role, index) => (
              <div key={index} className="w-fit h-fit rounded-full">
                <Image
                  src={role}
                  alt="role_img"
                  width={23}
                  height={23}
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={role}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center bg-neutral-950/90 px-2 py-1 w-fit rounded-full mt-2">
            <p className="text-sm">Favorite Heros</p>
            {item.settings?.favHeros?.map((hero, index) => (
              <div key={index} className="w-fit h-fit rounded-full">
                <Image
                  src={hero}
                  alt="role_img"
                  width={25}
                  height={25}
                  priority
                  loading="eager"
                  placeholder="blur"
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

export default Other;
