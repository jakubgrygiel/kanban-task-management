import { ModalsCtx } from "@/context/ModalsCtx";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.taskBg};
  box-shadow: ${({ theme }) => theme.colors.taskShadow};
  border-radius: 0.5rem;
  border: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

const TaskTitle = styled.h4`
  font-size: 0.9375rem;
`;

const SubtasksInfo = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function Task() {
  const { openModal } = useContext(ModalsCtx);

  function handleClick() {
    openModal("task-info");
  }
  return (
    <StyledWrapper onClick={handleClick}>
      <TaskTitle>Build UI for onboarding flow</TaskTitle>
      <SubtasksInfo>0 of 3 subtasks</SubtasksInfo>
    </StyledWrapper>
  );
}
