"use client"

import React, { useRef } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion"
import { GitHubIcon } from "../icons";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      ref={ref}
      className={clsx(`relative flex h-[90vh] flex-col justify-center items-center transition duration-1000 ease-cubic-bezier(0.17, 0.55, 0.55, 1) ${isInView ? "opacity-100 translate-x-0" : "-translate-x-8 opacity-0"}`)}
    >
      <h1>Projects</h1>
      
    </section>
  );
};

export default Projects;
