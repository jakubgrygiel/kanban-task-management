import styled from "styled-components";
import AddNewColumnBtn from "./AddNewColumnBtn";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function EmptyInfo() {
  return (
    <StyledWrapper>
      <p>This board is empty. Create a new column to get started.</p>
      <AddNewColumnBtn />
    </StyledWrapper>
  );
}
