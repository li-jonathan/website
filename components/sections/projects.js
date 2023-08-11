"use client"

import React from "react";
import Image from "next/image";

import { ProjectsData } from "@/public/content";
import spotifyScreenshot from "../../public/screenshots/spotify.png";
import healthTrackerScreenshot from "../../public/screenshots/healthtracker.png";

import { GitHubIcon, GoToLinkIcon } from "../icons";


const Projects = () => {
  const screenshots = {
    spotify: spotifyScreenshot,
    healthTracker: healthTrackerScreenshot,
  }
  return (
    <section
      id="projects"
      className="px-12 py-36"
    >
      <h1 className="mb-10 text-4xl font-bold text-emerald-400">/projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ProjectsData.map((project, index) => (
          <div className="mb-6">
            <div className="relative bg-emerald-400 border-4 border-emerald-400 rounded-md">
              <div className="opacity-0 hover:opacity-100 w-full h-full bg-emerald-400 bg-opacity-60 z-20 absolute top-0 left-0 flex justify-center items-center p-8 transition-all ease-in-out duration-700 text-neutral-900">
                <ul className="flex lg:flex-row flex-col gap-4 hover:cursor-pointer">
                  <li>
                    <GitHubIcon className="w-8 h-8 fill-neutral-200"/>
                  </li>
                  {project.url && <li>
                    <GoToLinkIcon className="w-8 h-8 fill-neutral-200" />
                  </li>}
                </ul>
              </div>
              <Image src={screenshots[project.image]} width={1280} height={720} alt={`Screenshot for ${project.title}`} className="rounded-md"/>
            </div>
            <div className="p-2 flex flex-col">
              <h3 className="font-semibold text-2xl mb-2">{project.title}</h3>
              <p className="text-justify">{project.details}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <p className="text-sm bg-neutral-500 bg-opacity-50 rounded-2xl px-3 py-1">{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
