import { ModalsCtx } from "@/context/ModalsCtx";
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
`;

export default function AddNewBoardBtn() {
  const { openModal } = useContext(ModalsCtx);

  function handleClick() {
    openModal("add-board");
  }

  return <StyledWrapper onClick={handleClick}>+ Add New Board</StyledWrapper>;
}
