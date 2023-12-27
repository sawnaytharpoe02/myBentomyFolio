import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center border-t border-neutral-200 dark:border-neutral-900 mt-6 pt-4">
      <p className="text-neutral-800 text-xs md:text-sm tracking-wider dark:text-neutral-400">
        Designed and coded with love fiery touch. ❤️‍🔥
      </p>
      <ThemeSwitcher />
    </div>
  );
};

export default Footer;
