"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "@/util/hooks/useDarkMode";

const Nav = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const navLink =
    "text-neutral-500 text-md font-semibold ml-8 cursor-pointer hover:text-neutral-950 dark:hover:text-slate-50 transition ease-in-out duration-700";
  const hamBar =
    "bg-neutral-500 block w-6 h-0.5 mx-auto my-1 transition-all ease-in-out duration-300";
  const hamNavLink =
    "text-xl text-slate-50 font-bold cursor-pointer hover:text-emerald-200 transition ease-in-out duration-700";

  return (
    <nav className="px-20 py-10">
      <div className="flex justify-between items-center">
        <div className="text-3xl text-neutral-500 font-bold hover:text-emerald-700 dark:hover:text-slate-50 transition ease-in-out duration-700">
          <Link href="/">J.Li</Link>
        </div>
        {/* desktop nav */}
        <ul className="hidden md:flex justify-between items-center">
          <li className={navLink}>
            <Link to="section1" smooth={true} duration={500}>
              about
            </Link>
          </li>
          <li className={navLink}>
            <Link to="section2" smooth={true} duration={500}>
              experience
            </Link>
          </li>
          <li className={navLink}>
            <Link to="section3" smooth={true} duration={500}>
              projects
            </Link>
          </li>
          <button
            className={clsx(
              navLink +
                " border-2 border-neutral-400 dark:border-neutral-500 py-1 px-2 rounded-md hover:bg-neutral-500 hover:border-neutral-500 hover:text-slate-50 dark:hover:bg-emerald-600 dark:hover:border-emerald-600 dark:hover:text-neutral-100"
            )}
          >
            resume
          </button>
          <li onClick={toggleTheme}>
            {darkTheme ? (
              <FontAwesomeIcon
                icon={faSun}
                size="lg"
                className="text-neutral-500 w-5 ml-8 cursor-pointer dark:hover:text-slate-50 transition ease-in-out duration-700"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                size="lg"
                className="text-neutral-500 w-5 ml-8 cursor-pointer hover:text-slate-950 transition ease-in-out duration-700"
              />
            )}
          </li>
        </ul>
        {/* mobile nav */}
        <div
          className="block md:hidden z-20 cursor-pointer"
          onClick={handleToggle}
        >
          <span
            className={clsx(
              `${hamBar} ${isOpen && "bg-slate-50 translate-y-1.5 rotate-45"}`
            )}
          />
          <span className={clsx(`${hamBar} ${isOpen && "opacity-0"}`)} />
          <span
            className={clsx(
              `${hamBar} ${isOpen && "bg-slate-50 -translate-y-1.5 -rotate-45"}`
            )}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute md:hidden z-5 bg-emerald-700 w-screen top-0 left-0 flex flex-col justify-center items-center p-20 gap-10"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              exit={{ y: -500 }}
              transition={{ duration: 0.4 }}
            >
              <li className={hamNavLink}>about</li>
              <li className={hamNavLink}>experience</li>
              <li className={hamNavLink}>projects</li>
              <button
                className={clsx(
                  hamNavLink +
                    " border-2 border-slate-50 py-1 px-2 rounded-md hover:text-emerald-700 hover:bg-slate-50"
                )}
              >
                resume
              </button>
              <li onClick={toggleTheme}>
                {darkTheme ? <p>use light</p> : <p>use dark</p>}
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
