import styled from "styled-components";
import { FormEvent } from "react";
import ItemInput from "./ItemInput";
import SubtaskItem from "./SubtaskItem";
import { ISubtask } from "@/data/initialData";

const StyledWrapper = styled.fieldset`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  border: none;
`;

const Legend = styled.legend`
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: calc(100dvh - 270px);
  overflow: hidden;
  overflow-y: auto;
`;

interface ISubtasksProps {
  content: ISubtask[];
}

export default function Subtasks({ content }: ISubtasksProps) {
  function renderSubtasks() {
    return content.map((subtask) => (
      <SubtaskItem
        key={subtask.id}
        id={subtask.id}
        text={subtask.title}
        isChecked={subtask.isCompleted}
      />
    ));
  }

  return (
    <StyledWrapper>
      <Legend>
        Subtasks ({content.filter((subtask: any) => subtask.isCompleted).length}{" "}
        of {content.length})
      </Legend>
      <List>{renderSubtasks()}</List>
    </StyledWrapper>
  );
}
