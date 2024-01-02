import React from "react";
import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { useMouse, useElementSize } from "@mantine/hooks";
import { useState } from "react";
import { motion } from "framer-motion";

// common style for my lunch box
const variants = cva(
  "rounded-3xl shadow-border flex dark:bg-neutral-900 bg-white dark:border dark:border-[1px] dark:border-neutral-800 @container",
  {
    variants: {
      size: {
        "1x2": "col-span-2 md:col-span-1 row-span-2",
        "2x1": "col-span-full md:col-span-2 row-span-1 px-5 md:px-6",
        "2x2": "col-span-full md:col-span-2 row-span-2",
        "2x4": "col-span-full md:col-span-2 row-span-4",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ children, size }: GridItemProps) => {
  const { ref: circleEl, width, height } = useElementSize();
  const { ref: cardEl, x, y } = useMouse();
  const [position, setPosition] = useState({ left: -100, top: -100 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = () => {
    setOpacity(1);
    setPosition({
      left: x - width / 2,
      top: y - height / 2,
    });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 70 }}
      ref={cardEl}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(variants({ size, className: "relative overflow-hidden" }))}>
      <div
        ref={circleEl}
        style={{
          left: position.left,
          top: position.top,
          opacity,
        }}
        className="dark:bg-white absolute scale-[1.5] blur-2xl w-10 h-10 rounded-full transition transition-opactiy duration-300"></div>
      <div className="w-full h-full flex items-center z-20">{children}</div>
    </motion.div>
  );
};

export default GridItem;
