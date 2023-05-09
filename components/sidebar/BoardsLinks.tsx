import styled from "styled-components";
import BoardBtn from "./BoardBtn";
import AddBoardBtn from "./AddBoardBtn";
import initialData from "@/data/initialData";

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
  padding-bottom: 1rem;
  font-size: 12px;
  letter-spacing: 2.4px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function BoardsLinks() {
  function renderBoardLinks() {
    return initialData.boards.map((board) => (
      <BoardBtn
        key={board.id}
        id={board.id}
        name={board.name}
        isActive={board.isActive}
      />
    ));
  }

  return (
    <StyledWrapper>
      <H2>ALL BOARDS (3)</H2>
      {renderBoardLinks()}
      <AddBoardBtn />
    </StyledWrapper>
  );
}
