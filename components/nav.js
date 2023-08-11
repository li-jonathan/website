"use client";
import { Link } from "react-scroll";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";

const Nav = () => {
  const navLinks = [
    { link: "hero", label: "home" },
    { link: "about", label: "about" },
    { link: "jobs", label: "experience" },
    { link: "projects", label: "projects" },
  ];
  return (
    <nav className="fixed right-0 p-6 2xl:p-12">
      <ul className="hidden flex-col gap-1 text-right lg:flex">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className="text-md cursor-pointer font-semibold text-neutral-400"
          >
            <Link to={link.link} smooth={true} duration={400}>
              /{link.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="fixed bottom-0 right-0 flex flex-col gap-4 p-6 lg:p-12 2xl:flex-row">
        <li>
          <EmailIcon className="h-6 w-6 fill-neutral-400" />
        </li>
        <li>
          <GitHubIcon className="h-6 w-6 fill-neutral-400" />
        </li>
        <li>
          <LinkedInIcon className="h-6 w-6 fill-neutral-400" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
