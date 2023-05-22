import { DarkModeCtx } from "@/context/DarkModeCtx";
import { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledWrapper = styled.div`
  z-index: ${({ theme }) => theme.zLevels.level2};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 400px;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.headerBg};
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
  border-radius: 0.75rem;
`;

const Title = styled.h1`
  font-size: 0.9375rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const Description = styled.p`
  font-size: 0.9375rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 1.75rem;
`;

const OpenApp = styled.div`
  a {
    color: ${({ theme }) => theme.colors.buttonAddTaskText};
    text-decoration: none;
  }
  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    height: 48px;

    padding: 0 1.5rem;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.buttonAddTaskBg};
    border: none;
    border-radius: 1.5rem;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonAddTaskBgHover};
    }
  }
`;

export default function HomeCard() {
  const { darkMode } = useContext(DarkModeCtx);

  return (
    <StyledWrapper>
      {darkMode ? (
        <img src="/assets/logo-light.svg" alt="logo of the app" />
      ) : (
        <img src="/assets/logo-dark.svg" alt="logo of the app" />
      )}
      <Title>TASK MANAGEMENT APP</Title>
      <Description>
        The all-in-one task management app designed to enhance your productivity
        and help you stay organized.
      </Description>
      <OpenApp>
        <Link href="/dashboard">
          <span>Try Demo Version</span>
        </Link>
      </OpenApp>
    </StyledWrapper>
  );
}
