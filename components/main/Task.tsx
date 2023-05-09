import { ModalsCtx } from "@/context/ModalsCtx";
import { ITask } from "@/data/initialData";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.li`
  width: 100%;
  list-style: none;
`;

const TaskButton = styled.button`
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
  border: 1px solid ${({ theme }) => theme.colors.taskBorder};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

const TaskTitle = styled.h4`
  text-align: left;
  font-size: 0.9375rem;
`;

const SubtasksInfo = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

interface ITaskProps {
  content: ITask;
}

export default function Task({ content }: ITaskProps) {
  const { openModal } = useContext(ModalsCtx);

  function handleClick() {
    openModal("task-info");
  }

  return (
    <StyledWrapper>
      <TaskButton onClick={handleClick}>
        <TaskTitle>{content.title}</TaskTitle>
        <SubtasksInfo>
          {
            content.subtasks.filter((subtask: any) => subtask.isCompleted)
              .length
          }{" "}
          of {content.subtasks.length} subtasks
        </SubtasksInfo>
      </TaskButton>
    </StyledWrapper>
  );
}
