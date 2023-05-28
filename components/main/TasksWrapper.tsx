import styled from "styled-components";
import Column from "./Column";
import SecondAddNewColumnBtn from "./SecondAddNewColumnBtn";
import { IBoard, UpdateEnum } from "@/data/initialData";
import { useContext } from "react";
import { DataCtx } from "@/context/DataCtx";
import EmptyBoardInfo from "./EmptyBoardInfo";
import EmptyAppInfo from "./EmptyAppInfo";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import useBoardCRUD from "@/hooks/crud-hooks/useBoardCRUD";
import { deepCopyObject } from "@/utils/helpers";

const StyledWrapper = styled.div<IWrapper>`
  position: absolute;
  inset: 0;
  left: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: stretch;
  gap: 1.5rem;
  transition: left 0.3s ease-in-out;
  overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    left: 0;
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  transition: left 0.3s ease-in-out;
`;

interface IWrapper {
  isOpen: boolean;
}

interface ITaskWrapperProps {
  isOpen: boolean;
}

export default function TasksWrapper({ isOpen }: ITaskWrapperProps) {
  const { data } = useContext(DataCtx);
  const { board, updateBoardContent } = useBoardCRUD();

  function renderColumns() {
    const activeBoard: IBoard | undefined = data?.boards.find(
      (board) => board.isActive
    );
    let i = -1;
    return activeBoard?.columns.map((column) => {
      if (i === 8) {
        i = -1;
      }
      i++;
      return <Column key={column.id} content={column} colorNum={i} />;
    });
  }

  function dragInsideColumn(result: DropResult) {
    let fromTaskIndex = result.source.index;
    let toTaskIndex = result.destination!.index;

    let columnIndex = board!.columns.findIndex(
      (column) => column.id === result.source.droppableId
    );

    let newBoard = deepCopyObject(board);
    let newTasks = deepCopyObject(board?.columns[columnIndex].tasks);

    const [item] = newTasks.splice(fromTaskIndex, 1);
    newTasks.splice(toTaskIndex, 0, item);
    newBoard.columns[columnIndex].tasks = newTasks;

    updateBoardContent(UpdateEnum.UPDATE, newBoard);
  }

  function dragBetweenColumns(result: DropResult) {
    let fromColumnId = result.source.droppableId;
    let toColumnId = result.destination!.droppableId;
    let fromTaskIndex = result.source.index;
    let toTaskIndex = result.destination!.index;

    let fromColumnIndex = board!.columns.findIndex(
      (column) => column.id === fromColumnId
    );
    let toColumnIndex = board!.columns.findIndex(
      (column) => column.id === toColumnId
    );

    let newBoard: IBoard = deepCopyObject(board);
    let newTasksFrom = deepCopyObject(board?.columns[fromColumnIndex].tasks);
    let newTasksTo = deepCopyObject(board?.columns[toColumnIndex].tasks);

    const [item] = newTasksFrom.splice(fromTaskIndex, 1);
    newTasksTo.splice(toTaskIndex, 0, item);

    newBoard.columns[fromColumnIndex].tasks = newTasksFrom;
    newBoard.columns[toColumnIndex].tasks = newTasksTo;

    updateBoardContent(UpdateEnum.UPDATE, newBoard);
  }

  function handleOnDragEnd(result: DropResult) {
    if (result.source.droppableId === result.destination?.droppableId) {
      dragInsideColumn(result);
      return;
    }
    dragBetweenColumns(result);
  }

  return (
    <StyledWrapper isOpen={isOpen}>
      {data === undefined || data.boards.length === 0 ? (
        <EmptyAppInfo />
      ) : data.boards[data!.boards.findIndex((board) => board.isActive)].columns
          .length === 0 ? (
        <EmptyBoardInfo />
      ) : (
        <ColumnsWrapper>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {renderColumns()}
          </DragDropContext>
          <SecondAddNewColumnBtn />
        </ColumnsWrapper>
      )}
    </StyledWrapper>
  );
}

// {data ? (
//   data.boards.length > 0 ? (
//     <ColumnsWrapper>
//       {renderColumns()}
//       <SecondAddNewColumnBtn />
//     </ColumnsWrapper>
//   ) : (
//     <EmptyInfo />
//   )
// ) : (
//   <EmptyInfo />
// )}
