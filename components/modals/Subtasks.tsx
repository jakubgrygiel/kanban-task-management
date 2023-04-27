import styled from "styled-components";
import { FormEvent } from "react";
import ItemInput from "./ItemInput";

const StyledWrapper = styled.fieldset`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  border: none;
`;

const Legend = styled.legend`
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

interface ISubtasksProps {}

export default function Subtasks() {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <StyledWrapper>
      <Legend>Subtasks (2 of 3)</Legend>
      <List></List>
    </StyledWrapper>
  );
}
