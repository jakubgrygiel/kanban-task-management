import styled from "styled-components";
import Task from "./Task";
import { IColumn } from "@/data/initialData";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 280px;
`;

const ColumnTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

const ColumnIcon = styled.span<IColorNum>`
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  background-color: ${({ theme, colorNum }) => theme.columnColors[colorNum]};
`;

const ColumnTitle = styled.h3`
  font-size: 0.75rem;
  letter-spacing: 2.4px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-transform: uppercase;
`;

const TaskList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

interface IColorNum {
  colorNum: number;
}
interface IColumnProps {
  content: IColumn;
  colorNum: number;
}

export default function Column({ content, colorNum }: IColumnProps) {
  function renderTasks() {
    const columnId = content.id;
    return content.tasks.map((task: any) => (
      <Task key={task.id} columnId={columnId} content={task} />
    ));
  }

  return (
    <StyledWrapper>
      <ColumnTitleWrapper>
        <ColumnIcon colorNum={colorNum} />
        <ColumnTitle>
          {content.name} ({content.tasks.length})
        </ColumnTitle>
      </ColumnTitleWrapper>
      <TaskList>{renderTasks()}</TaskList>
    </StyledWrapper>
  );
}
