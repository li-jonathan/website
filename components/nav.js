"use client";
import Link from "next/link";
import clsx from "clsx";
import { GitHubIcon, LinkedInIcon, EmailIcon, GoToLinkIcon } from "./icons";
import { navLinks } from "@/utils";
import { useState } from "react";
import Logo from "./icons/Logo";

const Nav = () => {
  const [currentSection, setCurrentSection] = useState("/");
  return (
    <nav className="fixed right-0 p-6 2xl:p-12">
      <Link href="/" onClick={() => setCurrentSection("/")}>
        <Logo className="duration-400 fixed left-6 top-6 w-8 transition ease-in-out hover:-translate-y-1" />
      </Link>
      <ul className="hidden flex-col gap-1 text-right lg:flex">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            onClick={() => setCurrentSection(link.link)}
            className={clsx(
              `${
                currentSection === link.link ? "text-yellow-400 " : ""
              } text-md duration-400 cursor-pointer font-semibold text-neutral-400 transition ease-in-out hover:-translate-x-2 hover:text-yellow-300`
            )}
          >
            <Link href={`#${link.link}`} shallow={false}>
              /{link.label}
            </Link>
          </li>
        ))}
        <li
          key="resume"
          className="text-md duration-400 mt-4 cursor-pointer font-semibold text-neutral-400 transition ease-in-out hover:-translate-x-2 hover:text-yellow-300"
        >
          <a
            className="flex items-center justify-end fill-neutral-400 hover:fill-yellow-300"
            href="/resume-test.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
            <span>
              <GoToLinkIcon className="ml-1 h-3" />
            </span>
          </a>
        </li>
      </ul>
      <ul className="fixed bottom-0 right-0 flex flex-col gap-4 p-6 lg:p-12 2xl:flex-row">
        <li>
          <a href="mailto:hello@jonathancli.com">
            <EmailIcon className="duration-400 h-6 w-6 fill-neutral-400 transition ease-in-out hover:-translate-y-1 hover:fill-yellow-400" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/li-jonathan"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="duration-400 h-6 w-6 fill-neutral-400 transition ease-in-out hover:-translate-y-1 hover:fill-yellow-400" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lijonathancj/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="duration-400 h-6 w-6 fill-neutral-400 transition ease-in-out hover:-translate-y-1 hover:fill-yellow-400" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
