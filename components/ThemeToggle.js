import React from "react";
import useDarkMode from "@/util/hooks/useDarkMode";
import { SunIcon, MoonIcon } from "./icons";
import clsx from "clsx";

const ThemeToggle = ({ styles, menu=false }) => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const toggleTheme = () => setDarkTheme(!darkTheme);
  return (
    <button onClick={toggleTheme} className={styles} >
      {darkTheme ? (
        <SunIcon className={clsx(`w-5 h-5 ${menu ? "fill-neutral-200 hover:fill-emerald-400" : "fill-neutral-500 hover:fill-slate-50"} transition ease-in-out duration-700`)} />
      ) : (
        <MoonIcon className={clsx(`w-5 h-5 ${menu ? "fill-neutral-200 hover:fill-emerald-400" : "fill-neutral-500 hover:fill-neutral-950"} transition ease-in-out duration-700`)} />
      )}
    </button>
  );
};

export default ThemeToggle;
