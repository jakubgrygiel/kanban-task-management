import { ModalsCtx } from "@/context/ModalsCtx";
import { FormEvent, useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-align: left;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.redText};
  background-color: transparent;
  border: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export default function DeleteTaskBtn() {
  const { openModal } = useContext(ModalsCtx);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    openModal("delete-task");
  }

  return <StyledWrapper onClick={handleClick}>Delete Task</StyledWrapper>;
}
