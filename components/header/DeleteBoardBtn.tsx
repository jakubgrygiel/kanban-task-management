import { DataCtx } from "@/context/DataCtx";
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export default function DeleteBoardBtn() {
  const { openModal } = useContext(ModalsCtx);
  const { data } = useContext(DataCtx);

  const isDisabled = data?.boards.length === 0 ? true : false;

  function handleClick(e: FormEvent) {
    e.preventDefault();
    openModal("delete-board");
  }

  return (
    <StyledWrapper onClick={handleClick} disabled={isDisabled}>
      Delete Board
    </StyledWrapper>
  );
}
