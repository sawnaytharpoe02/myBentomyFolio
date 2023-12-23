import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';
import { ArrowDownLeft, ArrowUp } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Icon from '../icon';

const Project = ({ item }: { item: IGridItems }) => {
  return (
    <div className="py-4 px-6">
      {item.tag === 'progressTitle' ? (
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/assets/Book.png" alt="book" width={40} height={30} />
            <p className="text-md ml-2">{item.title}</p>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full">
            <ArrowDownLeft className="text-neutral-500 dark:text-neutral-300" size={22} />
          </div>
        </div>
      ) : item.tag === 'edu' ? (
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-4'>
            <Icon type={item.icon ?? ''} color={item.bgColor} />
            <div className="flex flex-col gap-0.5 justify-start">
              <p className="text-md font-semibold">{item.title}</p>
              <p className="text-sm text-neutral-400">{item.description}</p>
            </div>
          </div>
          <Link
            href={item.href ?? ''} target='_blank'
            className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full text-neutral-500 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-900 cursor-pointer">
            <ArrowUpRight size={18} />
          </Link>
        </div>
      ) : (
        <div>Need to create new project</div>
      )}
    </div>
  );
};

export default Project;
