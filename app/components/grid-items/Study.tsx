import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Icon from '../icon';
import Link from 'next/link';
import Image from 'next/image';

const Study = ({ item }: { item: IGridItems }) => {
  return (
    <Link href={item.href ?? ''} target="_blank">
      <div className="p-7">
        <div className="flex space-x-2 items-center justify-between">
          <Icon
            type={item.icon ?? ''}
            color={item.bgColor ?? 'bg-neutral-950'}
          />

          <p
            className={`text-sm text-tlight flex items-center px-2 py-1 rounded-lg ${
              item.cornerBtnTitle === 'My learning journey'
                ? 'bg-blue-400'
                : 'bg-[#DAE6FF]'
            }`}>
            {item.cornerBtnTitle === 'My learning journey'
              ? '📌 ' + item.cornerBtnTitle
              : '📚 ' + item.cornerBtnTitle}
          </p>
        </div>

        <div className="space-y-1 mt-2">
          <h3 className="text-md line-clamp-1 font-semibold">{item.title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-1 font-medium">
            Instructor: <span className="underline">{item.user}</span>
          </p>
          <p className="text-sm font-medium text-black/80 dark:text-neutral-500 line-clamp-2 leading-5">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Study;
