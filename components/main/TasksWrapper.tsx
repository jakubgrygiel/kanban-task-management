import styled from "styled-components";
import { ISidebarIsOpen } from "../sidebar/Sidebar";
import EmptyInfo from "./EmptyInfo";
import Column from "./Column";
import SecondAddNewColumnBtn from "./SecondAddNewColumnBtn";
import initialData, { IColumn } from "@/data/initialData";
import { useState } from "react";

const StyledWrapper = styled.div<IWrapper>`
  position: absolute;
  inset: 0;
  left: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  display: flex;
  justify-content: ${({ isEmpty }) => (isEmpty ? "center" : "flex-start")};
  align-items: ${({ isEmpty }) => (isEmpty ? "center" : "flex-start")};
  align-items: stretch;
  gap: 1.5rem;
  padding: 1.5rem;
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
  isEmpty: boolean;
}

interface ITaskWrapperProps {
  isOpen: boolean;
}

export default function TasksWrapper({ isOpen }: ITaskWrapperProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  function renderColumns() {
    const data = initialData.boards.find((board) => board.isActive);
    return data?.columns.map((column) => (
      <Column key={column.id} content={column} />
    ));
  }

  return (
    <StyledWrapper isOpen={isOpen} isEmpty={isEmpty}>
      <ColumnsWrapper>
        {renderColumns()}
        <SecondAddNewColumnBtn />
      </ColumnsWrapper>
      {isEmpty && <EmptyInfo />}
    </StyledWrapper>
  );
}
