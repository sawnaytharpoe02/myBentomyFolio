import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Icon from '../icon';
import Link from 'next/link';

const Social = ({ item }: { item: IGridItems }) => {
  return (
    <Link
      href={item.href ?? ''}
      target="_blank"
      className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
      <p className="text-lg font-medium">{item.title}</p>
      <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-4">{item.user}</p>
      <Icon type={item.icon ?? ''} color={item.bgColor ?? 'bg-neutral-950'} />
    </Link>
  );
};

export default Social;
