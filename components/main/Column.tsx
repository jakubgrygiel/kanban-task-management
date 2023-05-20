import styled from "styled-components";
import Task from "./Task";
import { IColumn } from "@/data/initialData";

const StyledWrapper = styled.div<IIsEmpty>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  height: ${({ isEmpty }) => (isEmpty ? "100%" : "auto")};
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

const TaskList = styled.ul<IIsEmpty>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  height: ${({ isEmpty }) => (isEmpty ? "100%" : "auto")};
  width: 100%;
  padding-bottom: 3rem;
  border-radius: 0.375rem;
  border: ${({ isEmpty, theme }) =>
    isEmpty ? `2px  dashed ${theme.colors.columnBorder}` : "none"};
`;

interface IColorNum {
  colorNum: number;
}

interface IIsEmpty {
  isEmpty: boolean;
}
interface IColumnProps {
  content: IColumn;
  colorNum: number;
}

export default function Column({ content, colorNum }: IColumnProps) {
  const isEmpty = content.tasks.length === 0 ? true : false;

  function renderTasks() {
    const columnId = content.id;
    return content.tasks.map((task: any) => (
      <Task key={task.id} columnId={columnId} content={task} />
    ));
  }

  return (
    <StyledWrapper isEmpty={isEmpty}>
      <ColumnTitleWrapper>
        <ColumnIcon colorNum={colorNum} />
        <ColumnTitle>
          {content.title} ({content.tasks.length})
        </ColumnTitle>
      </ColumnTitleWrapper>
      <TaskList isEmpty={isEmpty}>{renderTasks()}</TaskList>
    </StyledWrapper>
  );
}
