"use client"

import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage("dark-theme");
  const [isClient, setIsClient] = useState(false);
  const isEnabled = typeof enabled === "undefined" ? false : enabled;

  useEffect(() => {
    setIsClient(true); // Set isClient to true after the component is mounted on the client-side
  }, []);

  useEffect(() => {
    const className = "dark";
    const htmlClass = document.documentElement.classList;

    if (isClient) {
      isEnabled ? htmlClass.add(className) : htmlClass.remove(className);
    }
  }, [isEnabled, isClient]);

  return [enabled, setEnabled];
};

export default useDarkMode;
