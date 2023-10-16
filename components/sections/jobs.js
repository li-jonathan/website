"use client";

import React, { useState } from "react";
import { JobsData } from "@/public/content";
import { GoToLinkIcon } from "../icons";
import clsx from "clsx";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="jobs" className="px-12 py-36">
      <h1 className="mb-10 text-4xl font-bold text-emerald-400">/experience</h1>
      <div className="flex min-h-[500px] max-w-3xl justify-center">
        <div className="relative flex min-w-max flex-col">
          {JobsData.map((job, index) => (
            <button
              className={clsx(
                `h-10 border-r-2 border-neutral-300 border-opacity-25 px-6 text-left text-sm hover:bg-neutral-200 hover:bg-opacity-10 hover:text-neutral-200 ${
                  activeTab === index + 1
                    ? "bg-neutral-200 bg-opacity-20 text-neutral-200"
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
              `absolute right-0 z-10 h-10 w-0.5 bg-emerald-400 ${
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
                  <span className="text-emerald-400">
                    {" @ "}
                    <a href={url} target="_blank" rel="noreferrer">{companyShort}</a>
                  </span>
                </h2>
                {titles.length > 1 && (
                  titles.slice(1).map(title => (
                    <h3 className="text-neutral-400">{title}</h3>
                  ))
                )}
                <p className="mb-6 text-md italic text-neutral-400">{job.range}</p>
                <ul className="list-none">
                  {details.map((bullet, index) => (
                    <li class="flex gap-4 mb-4">
                      <span class="text-emerald-500 text-lg leading-6">‣</span>
                      <p className="text-md text-neutral-400">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <p className="flex gap-2 items-center">View Resume <span><GoToLinkIcon className="w-4 h-4 fill-neutral-200" /></span></p>
    </section>
  );
};

export default Jobs;
