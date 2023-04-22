import styled from "styled-components";
import BoardBtn from "./BoardBtn";
import AddBoardBtn from "./AddBoardBtn";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const H2 = styled.h2`
  padding-left: 32px;
  font-size: 12px;
  letter-spacing: 2.4px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function BoardsLinks() {
  return (
    <StyledWrapper>
      <H2>ALL BOARDS (3)</H2>
      <BoardBtn isActive={true} />
      <BoardBtn isActive={false} />
      <BoardBtn isActive={false} />
      <AddBoardBtn />
    </StyledWrapper>
  );
}
