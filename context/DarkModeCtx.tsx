import { useDarkMode } from "@/hooks/useDarkMode";
import { createContext } from "react";
interface IDarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeCtx = createContext({
  darkMode: false,
  toggleMode: () => {},
});

export function DarkModeCtxProvider({ children }: IDarkModeProviderProps) {
  const [darkMode, toggleMode] = useDarkMode();

  const ctx = {
    darkMode: darkMode,
    toggleMode: toggleMode,
  };

  return <DarkModeCtx.Provider value={ctx}>{children}</DarkModeCtx.Provider>;
}
