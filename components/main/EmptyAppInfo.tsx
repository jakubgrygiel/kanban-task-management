import styled from "styled-components";
import AddNewBoardBtn from "./AddNewBoardBtn";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function EmptyAppInfo() {
  return (
    <StyledWrapper>
      <p>You don't have any boards yet. Create a new board to get started.</p>
      <AddNewBoardBtn />
    </StyledWrapper>
  );
}
