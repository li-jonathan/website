"use client";

import React, { useRef } from "react";
import { Link } from "react-scroll";
import { useInView } from "framer-motion"

import Menu from "./menu";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const Nav = () => {
  const navLinks = ["about", "jobs", "projects"];
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: true });

  return (
    <nav ref={navRef} className={clsx(`relative z-50 px-10 pt-10 transition duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "-translate-y-10 opacity-0"}`)}>
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-neutral-500">
          J.LI
        </div>
        <ul className="hidden items-center justify-between md:flex">
          {navLinks.map((name, idx) => (
            <li key={idx} className="ml-8 cursor-pointer font-semibold text-neutral-500 transition duration-700 ease-in-out hover:text-neutral-950 dark:hover:text-neutral-50">
              <Link to={name} smooth={true} duration={500}>
                {name}
              </Link>
            </li>
          ))}
          <button className="ml-8 cursor-pointer rounded-md border-2 border-neutral-400 px-2 py-1 font-semibold text-neutral-500 transition duration-700 ease-in-out hover:border-emerald-700 hover:bg-emerald-700 hover:text-slate-50 dark:border-neutral-500 dark:hover:border-emerald-600 dark:hover:bg-emerald-600 dark:hover:text-neutral-100">
            resume
          </button>
          <ThemeToggle styles="ml-8" />
        </ul>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
