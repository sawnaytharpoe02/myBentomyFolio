import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="0.75"
      width="42"
      visible={true}
    />
  );
};

export default Loader;
