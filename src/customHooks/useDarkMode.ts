import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      setIsDarkMode(matchMedia.matches);
    };

    matchMedia.addEventListener("change", updateTheme);
    updateTheme();

    return () => {
      matchMedia.removeEventListener("change", updateTheme);
    };
  }, []);

  return isDarkMode;
}
