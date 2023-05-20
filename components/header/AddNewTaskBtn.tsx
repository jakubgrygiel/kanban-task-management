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
  gap: 12px;
  height: 48px;

  padding: 0 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.buttonAddTaskText};
  background-color: ${({ theme }) => theme.colors.buttonAddTaskBg};
  border: none;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonAddTaskBgHover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
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
      + Add New Task
    </StyledWrapper>
  );
}
