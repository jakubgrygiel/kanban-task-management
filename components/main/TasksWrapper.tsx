import styled from "styled-components";
import Column from "./Column";
import SecondAddNewColumnBtn from "./SecondAddNewColumnBtn";
import { IBoard } from "@/data/initialData";
import { useContext } from "react";
import { DataCtx } from "@/context/DataCtx";
import EmptyBoardInfo from "./EmptyBoardInfo";
import EmptyAppInfo from "./EmptyAppInfo";

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

  function renderColumns() {
    const activeBoard: IBoard | undefined = data?.boards.find(
      (board) => board.isActive
    );
    let i = -1;
    return activeBoard?.columns.map((column) => {
      i++;
      return <Column key={column.id} content={column} colorNum={i} />;
    });
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
          {renderColumns()}
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
