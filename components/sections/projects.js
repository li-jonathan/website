"use client";

import React from "react";
import Image from "next/image";

import { ProjectsData } from "@/public/content";
import { GitHubIcon, GoToLinkIcon } from "../icons";
import SectionWrapper from "./SectionWrapper";

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="projects">
      <div className="flex items-center">
        <div className="flex gap-4 rounded-md bg-neutral-200 bg-opacity-10 p-4">
          <Image
            src="/images/google.png"
            width={256}
            height={144}
            className="aspect-video max-h-36 rounded-md"
          />
          <div className="flex flex-col justify-center gap-2">
            <p className="text-xl font-semibold text-yellow-400">
              Spotify Profile
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus aenean vel elit
            </p>
            <ul className="flex flex-wrap gap-2">
              {["React", "Redux", "Tailwind"].map((tech, index) => (
                <li
                  key={`${tech}-${index}`}
                  className="rounded-2xl bg-neutral-500 bg-opacity-50 px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <a
              href="https://github.com/li-jonathan"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-6 fill-yellow-400 hover:fill-yellow-300" />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <GoToLinkIcon className="h-6 fill-yellow-400 hover:fill-yellow-300" />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
