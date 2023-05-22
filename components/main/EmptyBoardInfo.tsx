import styled from "styled-components";
import AddNewColumnBtn from "./AddNewColumnBtn";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondaryText};

  p {
    text-align: center;
  }
`;

export default function EmptyBoardInfo() {
  return (
    <StyledWrapper>
      <p>This board is empty. Create a new column to get started.</p>
      <AddNewColumnBtn />
    </StyledWrapper>
  );
}
