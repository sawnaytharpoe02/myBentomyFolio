import React, { useState, useEffect } from "react";
import { IGridItems } from "@/config/siteConfig";
import Image from "next/image";

const Art = ({ item }: { item: IGridItems }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full inset-0 object-cover">
        {item.layout === "2x4" || item.layout === "2x2" ? (
          <video
            id="video"
            src={`https://res.cloudinary.com/daj8y4fbs/video/upload/f_auto:video,q_auto/v1/blobLiquid/${item.path}`}
            className="absolute w-full h-full object-cover inset-0"
            autoPlay
            muted
            loop
          />
        ) : (
          <Image
            src={item.path ?? ""}
            alt="art_gallery"
            layout="fill"
            objectFit="cover"
            loading="eager"
            placeholder="blur"
            blurDataURL={item.path ?? ""}
          />
        )}
      </div>
    </div>
  );
};

export default Art;
