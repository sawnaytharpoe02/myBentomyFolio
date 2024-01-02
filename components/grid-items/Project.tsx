import React from "react";
import { IGridItems } from "@/config/siteConfig";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Icon from "../icon";

const Project = ({ item }: { item: IGridItems }) => {
  return (
    <div className="w-full">
      {item.tag === "progressTitle" ? (
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image
              src={
                item.description === "blob"
                  ? "/assets/Art.png"
                  : "/assets/Book.png"
              }
              alt={item.description === "blob" ? "Art" : "Book"}
              width={30}
              height={40}
              className="w-auto h-auto"
              loading="eager"
              priority
              placeholder="blur"
              blurDataURL={
                item.description === "blob"
                  ? "/assets/Art.png"
                  : "/assets/Book.png"
              }
            />
            <p className="text-sm md:text-md ml-2 font-semibold">
              {item.title}
            </p>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full ml-2">
            <ArrowDownRight
              className="text-neutral-500 dark:text-neutral-300"
              size={22}
            />
          </div>
        </div>
      ) : item.tag === "edu" ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <Icon type={item.icon ?? ""} color={item.bgColor} />
            <div className="flex flex-col gap-0.5 justify-start">
              <p className="text-sm md:text-md font-semibold line-clamp-1">
                {item.title}
              </p>
              <p className="text-sm md:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
                {item.description}
              </p>
            </div>
          </div>
          <div>
            <Link
              href={item.href ?? ""}
              target="_blank"
              className="flex bg-neutral-100 dark:bg-neutral-800 p-2 ml-2x rounded-full text-neutral-500 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-900 cursor-pointer">
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      ) : (
        <div>Need to create new project</div>
      )}
    </div>
  );
};
// py4 px6

export default Project;
