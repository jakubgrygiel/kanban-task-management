import styled from "styled-components";
import Task from "./Task";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 280px;
`;

const ColumnTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

const ColumnIcon = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  background-color: hsla(193, 75%, 59%, 1);
`;

const ColumnTitle = styled.h3`
  font-size: 0.75rem;
  letter-spacing: 2.4px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-transform: uppercase;
`;

export default function Column() {
  return (
    <StyledWrapper>
      <ColumnTitleWrapper>
        <ColumnIcon />
        <ColumnTitle>Todo (4)</ColumnTitle>
      </ColumnTitleWrapper>
      <Task />
      <Task />
      <Task />
    </StyledWrapper>
  );
}
