import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Book = ({ item }: { item: IGridItems }) => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-2 gap-10">
        {item.bookstore?.map((book, index) => (
          <div
            className="relative overflow-hidden rounded-xl
            key={index}-xl">
            <Image
              src={book.cover}
              alt="book"
              width={200}
              height={80}
              objectFit="cover"
              priority
              loading='eager'
              placeholder='blur'
              blurDataURL={book.cover}
            />
            <Link
              href={book.url}
              target="_blank"
              className="absolute top-2 right-2 p-1.5 z-200 cursor-pointer w-30 h-30 rounded-full text-neutral-600 dark:text-white bg-white dark:bg-neutral-700/90 hover:text-white hover:bg-neutral-600/90 dark:hover:text-neutral-600 dark:hover:bg-white transition duration-200 ease-in-out">
              <ArrowUpRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
