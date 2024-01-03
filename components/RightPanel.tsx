"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import GridItem from "./GridItem";
import Social from "./grid-items/Social";
import Other from "./grid-items/Other";
import Study from "./grid-items/Study";
import Project from "./grid-items/Project";
import { useAnimate, stagger } from "framer-motion";

// const arrayItem = Array.from({ length: 10 }, (_, i) => i + 1)

const staggerDelay = stagger(0.04);

const RightPanel = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          type: "spring",
          stiffness: 300,
          damping: 35,
          delay: staggerDelay,
        }
      );
    }
  }, [scope]);

  return (
    <div className="basis-[70%] xl:overflow-y-auto xl:px-2 xl:py-12">
      <p className="text-lg @lg:text-2xl mb-10">
        Snapshot of my current obsessions, not a career retrospective ... 🤯✨
      </p>
      <div
        ref={scope}
        className="w-full grid grid-cols-4 gap-6 lg:gap-10 auto-rows-[78px] xl:mb-96">
        {siteConfig.items.map((item, index) => {
          return (
            <GridItem key={item.title + item.type + index} size={item.layout}>
              {item.type === "social" ? (
                <Social item={item} />
              ) : item.type === "study" ? (
                <Study item={item} />
              ) : item.type === "project" ? (
                <Project item={item} />
              ) : item.type === "other" ? (
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
