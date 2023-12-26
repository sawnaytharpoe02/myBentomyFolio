'use client';
import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import GridItem from './GridItem';
import Social from './grid-items/Social';
import Other from './grid-items/Other';
import Study from './grid-items/Study';
import Project from './grid-items/Project';

// const arrayItem = Array.from({ length: 10 }, (_, i) => i + 1);
// const arrayItem = [
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-1' },
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-1' },
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-2' },
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-4' },
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-4' },
//   { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
//   { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-4' },
//   { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
//   { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
//   { className: 'bg-red-400 rounded-3xl col-span-2 row-span-2' },
// ];

const RightPanel = () => {
  return (
    <div className="basis-[70%] overflow-y-auto min-h-screen px-2 py-12">
      <p className="text-2xl mb-10">
        Snapshot of my current obsessions, not a career retrospective ... 🤯✨
      </p>
      <div
        className="w-full grid grid-cols-4 auto-rows-[78px] gap-10 mb-96"
        id="card">
        {siteConfig.items.map((item, index) => {
          return (
            <GridItem key={item.title + item.type + index} size={item.layout}>
              {item.type === 'social' ? (
                <Social item={item} />
              ) : item.type === 'study' ? (
                <Study item={item} />
              ) : item.type === 'project' ? (
                <Project item={item} />
              ) : item.type === 'other' ? (
                <Other item={item} />
              ) : (
                <div>Need to create new component</div>
              )}
            </GridItem>
          );
        })}
      </div>
    </div>
  );
};

export default RightPanel;
