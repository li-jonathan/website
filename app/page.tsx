"use client";

import { About, Experience, Projects } from "@/components/content";
import { Terminal } from "@/components/terminal";
import { VALID_COMMANDS } from "@/lib/commands";
import { useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    if (VALID_COMMANDS.includes(cmd)) {
      setCurrentSection(cmd);
      return `jonathan/website @ ${cmd}-section`;
    }

    switch (cmd) {
      case "help":
        return `Available commands: ${VALID_COMMANDS.join(", ")}, help`;
      default:
        return `Command not found: ${command}. Type 'help' for available commands.`;
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 p-8">
      <div className="w-full md:w-1/2">
        <Terminal onCommand={handleCommand} />
      </div>
      <div className="w-full md:w-1/2 h-1/2">{renderSection()}</div>
    </div>
  );
}
