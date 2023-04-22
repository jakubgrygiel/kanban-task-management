import { useEffect } from "react";

const useEscKeyDown = (callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleClick);

    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, []);
};

export default useEscKeyDown;
