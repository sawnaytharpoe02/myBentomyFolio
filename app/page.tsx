import React from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const page = () => {  
  return (
    <div className="container mx-auto relative flex flex-col w-full h-full xl:flex-row px:4 py-10 gap-10">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default page;
