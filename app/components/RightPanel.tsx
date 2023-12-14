'use client';
import React from 'react';

// const arrayItem = Array.from({ length: 10 }, (_, i) => i + 1);
const arrayItem = [
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-1' },
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-1' },
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-2' },
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-4' },
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-4' },
  { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
  { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-4' },
  { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
  { className: 'bg-red-400 rounded-3xl col-span-1 row-span-2' },
  { className: 'bg-red-400 rounded-3xl col-span-2 row-span-2' },
];

const RightPanel = () => {
  return (
    <div className="basis-2/3 overflow-y-auto min-h-screen">
      <p className="text-3xl my-4">right side</p>
      <div className="grid grid-cols-4 auto-rows-[78px] gap-8 mb-96">
        {arrayItem.map((item, index) => (
          <div className={item.className} key={index}>
            some fucking cool content
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
