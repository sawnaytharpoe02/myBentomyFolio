import React, { useState, useEffect } from "react";
import { IGridItems } from "@/config/siteConfig";
import Image from "next/image";
import Loader from "../Loader";

const Art = ({ item }: { item: IGridItems }) => {
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  if (!clientLoaded) {
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {item.layout === "2x4" || (item.layout === "2x2") && clientLoaded ? (
          <video
            className="absolute w-full h-full inset-0 object-cover"
            src={require(`../../public/${item.path}`)}
            autoPlay
            muted
            loop
            preload="auto"
          />
      ) : (
        <Image
          src={item.path ?? ""}
          alt="art_gallery"
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={item.path ?? ""}
        />
      )}
    </div>
  );
};

export default Art;
