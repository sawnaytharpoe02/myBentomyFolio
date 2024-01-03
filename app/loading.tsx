"use client";

import React from "react";
import Loader from "@/components/Loader";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default Loading;
