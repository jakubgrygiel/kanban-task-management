import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let darkModeOnLoad = prefersDarkMode();
      darkModeOnLoad = getModeFromLocalStorage(darkModeOnLoad);
      setDarkMode(darkModeOnLoad);
    }
  }, []);

  function getModeFromLocalStorage(darkMode: boolean) {
    if (localStorage.getItem("mode") === "light" && darkMode) {
      return false;
    }
    if (localStorage.getItem("mode") === "dark" && !darkMode) {
      return true;
    }
    if (localStorage.getItem("mode") === null && darkMode) {
      localStorage.setItem("mode", "dark");
      return true;
    }
    if (localStorage.getItem("mode") === null && !darkMode) {
      localStorage.setItem("mode", "light");
      return false;
    }
    return true;
  }

  function prefersDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function toggleMode(): void {
    setDarkMode((prevState) => {
      const mode = !prevState ? "dark" : "light";
      localStorage.setItem("mode", mode);
      return !prevState;
    });
  }

  return [darkMode, toggleMode] as const;
};
