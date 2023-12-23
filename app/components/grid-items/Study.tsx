import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Icon from '../icon';
import Link from 'next/link';
import Image from 'next/image';

const Study = ({ item }: { item: IGridItems }) => {
  return (
    <Link href={item.href ?? ''} target="_blank">
      <div className="p-7 space-y-3">
        <div className="flex space-x-2 items-center justify-between">
          {item.tag === 'edu' ? (
            <Icon
              type={item.icon ?? ''}
              color={item.bgColor ?? 'bg-neutral-950'}
            />
          ) : (
            <Image src="/assets/Book.png" alt="book" width={40} height={40} />
          )}

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

        <div>
          <h3 className="text-md line-clamp-1 font-semibold">{item.title}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Instructor: <span className="underline">{item.user}</span>
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2 leading-5">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Study;
