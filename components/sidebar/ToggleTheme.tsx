import { DarkModeCtx } from "@/context/DarkModeCtx";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ToggleCheckbox from "./ToggleCheckbox";

const StyledWrapper = styled.div`
  width: 100%;
  padding-left: 1.5rem;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-left: 1rem;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 0.875rem;
  background-color: ${({ theme }) => theme.colors.themeCardBg};
  border-radius: 0.375rem;
`;

const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 40px;
`;

const Input = styled.input`
  cursor: pointer;
  height: 20px;
  width: 40px;
  border-radius: 0.625rem;
`;

export default function ToggleTheme() {
  const inputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(DarkModeCtx);

  useEffect(() => {
    inputRef.current!.checked = ctx.darkMode;
  }, [ctx.darkMode]);

  function toggleTheme() {
    ctx.toggleMode();
  }

  return (
    <StyledWrapper>
      <ToggleWrapper>
        <img src="assets/icon-light-theme.svg" alt="icon for light theme" />
        <Label htmlFor="toggle-theme">
          <Input
            type="checkbox"
            id="toggle-theme"
            ref={inputRef}
            onClick={toggleTheme}
          />
          <ToggleCheckbox isChecked={!ctx.darkMode} />
        </Label>
        <img src="assets/icon-dark-theme.svg" alt="icon for dark theme" />
      </ToggleWrapper>
    </StyledWrapper>
  );
}
