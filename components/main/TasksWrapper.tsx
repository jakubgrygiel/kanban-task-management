import styled from "styled-components";
import { ISidebarIsOpen } from "../sidebar/Sidebar";
import EmptyInfo from "./EmptyInfo";
import Column from "./Column";
import SecondAddNewColumnBtn from "./SecondAddNewColumnBtn";

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
  isEmpty: boolean;
}

export default function TasksWrapper({ isOpen, isEmpty }: ITaskWrapperProps) {
  return (
    <StyledWrapper isOpen={isOpen} isEmpty={isEmpty}>
      <ColumnsWrapper>
        <Column />
        <Column />
        <Column />
        <SecondAddNewColumnBtn />
      </ColumnsWrapper>
      {isEmpty && <EmptyInfo />}
    </StyledWrapper>
  );
}
