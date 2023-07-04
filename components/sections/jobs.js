"use client";

import React, { useState, useRef } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import { JobsData } from "@/public/content";

const Jobs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="jobs"
      ref={ref}
      className={clsx(
        `ease-cubic-bezier(0.17, 0.55, 0.55, 1) flex flex-col items-center justify-center px-10 md:px-30 lg:px-40 py-10 transition duration-1000 ${
          isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`
      )}
    >
      <h1 className="text-4xl font-bold mb-10">Experience</h1>
      <ol class="relative border-l border-neutral-400">
        {JobsData.map((job, idx) => (
          <li key={idx} class="mb-10 ml-4">
            <div class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-neutral-50 dark:border-neutral-300 bg-emerald-700"></div>
            <time class="mb-1 text-sm text-neutral-500 dark:text-neutral-500 leading-none">
              {job.range}
            </time>
            <h3 class="text-lg font-semibold gap-1">
              {job.title[0]}
              <span className="ml-2 font-bold text-emerald-700 hover:text-emerald-600 dark:text-emerald-600 dark:hover:text-emerald-500 "><a href={job.url} rel="noreferrer" target="_blank">{` // ${job.company}`}</a></span>
            </h3>
            {job.title[1] && (
              <h3 class="text-lg font-semibold gap-1">
                {job.title[1]}
              </h3>
            )}
            {job.details.map(item => (
              <p class="mb-4 dark:text-neutral-400">
                {item}
              </p>
            ))}
            <div className="flex gap-2">
              {job.techStack.map(tech => (
                <div className="text-sm bg-emerald-700 text-neutral-200 py-1 px-2 rounded-lg">{tech}</div>
              ))}
            </div>
          </li>
        ))}

      </ol>
    </section>
  );
};

export default Jobs;
