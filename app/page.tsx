import React from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';

const page = () => {
  return (
    <div className="relative w-full xl:h-full flex items-center px-5 md:px-8 lg:px-0">
      <div className="absolute inset-0 z-0 bg-light-grid dark:bg-dark-grid bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="container relative z-20 mx-auto flex flex-col w-full h-full xl:flex-row xl:gap-10">
        <LeftPanel />
        <RightPanel />
        {/* Footer */}
        <div className="flex w-full my-4 lg:my-8 lg:px-6 xl:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
