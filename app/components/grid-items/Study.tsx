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
            className={`text-sm text-tdark flex items-center px-2 py-1 rounded-lg ${
              item.tag === 'edu'
                ? 'bg-blue-600'
                : 'bg-neutral-950'
            }`}>
            {item.tag === 'edu' ? '📌 My learning journey' : '📚 ' + item.title}
          </p>
        </div>
        {item.tag === 'edu' ? (
          <div>
            <h3 className="text-md line-clamp-1 font-semibold">{item.title}</h3>
            <p className="text-sm text-neutral-400 mb-1">
              Instructor: <span className="underline">{item.user}</span>
            </p>
            <p className="text-sm text-neutral-400 line-clamp-2">
              {item.description}
            </p>
          </div>
        ) : (
          <div>good</div>
        )}
      </div>
    </Link>
  );
};

export default Study;
