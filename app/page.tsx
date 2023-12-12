import React from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const page = () => {
  return (
    <div className="relative w-full h-full flex items-center">
      <div className="absolute inset-0 z-0 bg-light-grid dark:bg-dark-grid bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="container relative z-20 mx-auto flex flex-col w-full h-full xl:flex-row px:4 gap-10">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default page;
