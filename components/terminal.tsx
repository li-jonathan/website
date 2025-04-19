"use client";

import { useRef, useState } from "react";
import { TerminalIcon } from "lucide-react";
import type { Command } from "@/lib/commands";
import { HelpIcon } from "./help-icon";

interface TerminalProps {
  onCommand: (command: string) => string;
}

export const Terminal = ({ onCommand }: TerminalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState<string>(
    `Welcome, try typing 'experience' to get started`
  );
  const [command, setCommand] = useState<Command>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    const result = onCommand(command);
    setPrompt(result);
    setCommand("");
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full border border-gray-400 drop-shadow rounded-lg">
      <div className="flex items-center justify-between bg-slate-500 rounded-t-lg p-3">
        <div className="text-sm text-slate-50 font-bold flex items-center">
          <TerminalIcon className="w-4 h-4 mr-2 stroke-3" />
          Terminal
        </div>
        <HelpIcon />
      </div>
      <div
        onClick={focusInput}
        className="bg-slate-700 font-mono text-sm p-5 rounded-b-lg flex flex-col justify-center"
      >
        <div className="text-green-400 font-semibold">{prompt}</div>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <span className="text-blue-400 font-semibold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-blue-400 ml-2"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
