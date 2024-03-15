"use client";

import React, { useState } from "react";
import { JobsData } from "@/public/content";
import { GoToLinkIcon } from "../icons";
import clsx from "clsx";
import SectionWrapper from "./SectionWrapper";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <SectionWrapper id="jobs" title="experience">
      <div className="flex justify-center">
        <div className="relative flex min-w-max flex-col">
          {JobsData.map((job, index) => (
            <button
              className={clsx(
                `h-10 border-r-2 border-neutral-300 border-opacity-25 px-6 text-left text-sm hover:bg-neutral-200 hover:bg-opacity-10 hover:text-neutral-200 ${
                  activeTab === index + 1
                    ? "bg-neutral-200 bg-opacity-20 font-semibold text-neutral-200"
                    : "text-neutral-400"
                } transition-all duration-700 ease-in-out`
              )}
              onClick={() => setActiveTab(index + 1)}
            >
              {job.companyShort}
            </button>
          ))}
          <span
            className={clsx(
              `absolute right-0 z-10 h-10 w-0.5 rounded bg-yellow-400 ${
                activeTab === 1
                  ? "-translate-y-0"
                  : activeTab === 2
                  ? "translate-y-full"
                  : activeTab === 3
                  ? "translate-y-[200%]"
                  : "translate-y-[300%]"
              } ease-cubic-bezier transition-transform delay-200 duration-700`
            )}
          ></span>
        </div>
        <div className="relative w-full lg:ml-4">
          {JobsData.map((job, index) => {
            const {
              titles,
              company,
              companyShort,
              range,
              url,
              details,
              techStack,
            } = job;
            return (
              <div
                className={clsx(
                  `${
                    activeTab === index + 1 ? "block" : "hidden"
                  } h-auto w-full px-4 py-2`
                )}
              >
                <h2 className="text-xl font-semibold">
                  {titles[0]}
                  <span className="text-yellow-400 hover:text-yellow-300">
                    {" @ "}
                    <a href={url} target="_blank" rel="noreferrer">
                      {company}
                    </a>
                  </span>
                </h2>
                {titles.length > 1 &&
                  titles
                    .slice(1)
                    .map((title) => (
                      <h3 className="text-neutral-400">{title}</h3>
                    ))}
                <p className="text-md mb-6 italic text-neutral-400">
                  {job.range}
                </p>
                <ul className="list-none">
                  {details.map((bullet, index) => (
                    <li key={index} class="mb-4 flex gap-4">
                      <span class="text-lg leading-6 text-yellow-400">‣</span>
                      <p className="text-md text-neutral-400">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <a
        href="/resume-test.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-24 flex items-center gap-2"
      >
        View Resume{" "}
        <span>
          <GoToLinkIcon className="h-4 w-4 fill-neutral-200" />
        </span>
      </a>
    </SectionWrapper>
  );
};

export default Jobs;
