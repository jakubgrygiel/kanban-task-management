import { DarkModeCtx } from "@/context/DarkModeCtx";
import { darkTheme, lightTheme } from "@/theme/theme";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProviderCustom({ children }: IThemeProviderProps) {
  const ctx = useContext(DarkModeCtx);

  return (
    <ThemeProvider theme={ctx.darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
