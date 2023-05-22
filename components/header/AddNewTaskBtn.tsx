import { DataCtx } from "@/context/DataCtx";
import { ModalsCtx } from "@/context/ModalsCtx";
import useBoardCRUD from "@/hooks/crud-hooks/useBoardCRUD";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  height: 48px;

  padding: 0 1.5rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.buttonAddTaskText};
  background-color: ${({ theme }) => theme.colors.buttonAddTaskBg};
  border: none;
  border-radius: 1.5rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonAddTaskBgHover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: flex;
    justify-content: center;
    height: 32px;
    width: 48px;
    padding: 0;

    span:first-of-type {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.screens.mobile}) {
    span:last-of-type {
      display: none;
    }
  }
`;

export default function AddNewTaskBtn() {
  const { openModal } = useContext(ModalsCtx);
  const { data } = useContext(DataCtx);
  const { board } = useBoardCRUD();

  const isDisabled =
    board?.columns.length === 0 || data?.boards.length === 0 ? true : false;

  function handleClick() {
    openModal("add-task");
  }

  return (
    <StyledWrapper onClick={handleClick} disabled={isDisabled}>
      <span>+ Add New Task</span>
      <span>
        <img src="/assets/icon-add-task-mobile.svg" alt="add new task icon" />
      </span>
    </StyledWrapper>
  );
}
