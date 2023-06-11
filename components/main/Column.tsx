import styled from "styled-components";
import Task from "./Task";
import { IColumn } from "@/data/initialData";
import { Draggable, Droppable } from "react-beautiful-dnd";

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
  height: ${({ isEmpty }) => (isEmpty ? "100%" : "auto")};
  width: 100%;
  padding-bottom: 3rem;
  border-radius: 0.375rem;
  border: ${({ isEmpty, theme }) =>
    isEmpty ? `2px  dashed ${theme.colors.columnBorder}` : "none"};

  li {
    list-style: none;
    width: 100%;
    margin-bottom: 1.5rem;
  }
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

  return (
    <StyledWrapper isEmpty={isEmpty}>
      <ColumnTitleWrapper>
        <ColumnIcon colorNum={colorNum} />
        <ColumnTitle>
          {content.title} ({content.tasks.length})
        </ColumnTitle>
      </ColumnTitleWrapper>
      <Droppable droppableId={content.id}>
        {(provided) => (
          <TaskList
            isEmpty={isEmpty}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {content.tasks.map((task: any, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Task columnId={content.id} content={task} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </StyledWrapper>
  );
}
