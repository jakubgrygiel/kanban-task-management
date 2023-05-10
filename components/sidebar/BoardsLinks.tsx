import styled from "styled-components";
import BoardBtn from "./BoardBtn";
import AddBoardBtn from "./AddBoardBtn";
import { useContext } from "react";
import { DataCtx } from "@/context/DataCtx";

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
  const { data } = useContext(DataCtx);

  function renderBoardLinks() {
    return data.boards.map((board) => (
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
      <H2>ALL BOARDS ({data.boards.length})</H2>
      {renderBoardLinks()}
      <AddBoardBtn />
    </StyledWrapper>
  );
}
