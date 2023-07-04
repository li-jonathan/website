"use client";

import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import ThemeToggle from "./ThemeToggle";
import { useOnClickOutside } from "@/util";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(true));

  const navLinks = ["about", "jobs", "projects"];

  return (
    <div className="block md:hidden">
      <div ref={wrapperRef} >
        <button className="relative z-50" onClick={toggleMenu}>
          <span
            className={clsx(
              `mx-auto my-1 block h-0.5 w-6 bg-neutral-500 transition-all duration-300 ease-in-out ${
                menuOpen && "translate-y-1.5 rotate-45 bg-slate-50"
              }`
            )}
          />
          <span
            className={clsx(
              `mx-auto my-1 block h-0.5 w-6 bg-neutral-500 transition-all duration-300 ease-in-out ${
                menuOpen && "opacity-0"
              }`
            )}
          />
          <span
            className={clsx(
              `mx-auto my-1 block h-0.5 w-6 bg-neutral-500 transition-all duration-300 ease-in-out ${
                menuOpen && "-translate-y-1.5 -rotate-45 bg-slate-50"
              }`
            )}
          />
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              className="absolute top-0 right-0 min-w-[50vw] bg-emerald-700 p-20 md:hidden"
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.4 }}
            >
              <nav className="flex flex-col items-center justify-center text-center text-xl font-bold text-neutral-200">
                <ul className="m-0 p-0">
                  {navLinks.map((name, idx) => (
                    <li
                      key={idx}
                      className="mb-10 cursor-pointer transition duration-700 ease-in-out hover:text-emerald-400"
                    >
                      <Link
                        to={name}
                        smooth={true}
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a className="mb-10 cursor-pointer rounded-md border-2 border-slate-50 px-2 py-1 transition duration-700 ease-in-out hover:bg-slate-50 hover:text-emerald-700">
                  resume
                </a>
                <ThemeToggle menu={true} styles="text-xl font-bold text-neutral-200 hover:text-emerald-400 transition ease-in-out duration-700" />
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;