import { ModalsCtx } from "@/context/ModalsCtx";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-top: 2.4375rem;
  height: 100%;
`;

const AddColumnBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 100%;
  width: 280px;
  padding: 1.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.newColumnGradient};
  border: none;
  border-radius: 0.375rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.purpleText};
  }
`;

export default function SecondAddNewColumnBtn() {
  const { openModal } = useContext(ModalsCtx);

  function handleClick() {
    openModal("add-column");
  }

  return (
    <StyledWrapper>
      <AddColumnBtn onClick={handleClick}>+ New Column</AddColumnBtn>
    </StyledWrapper>
  );
}
