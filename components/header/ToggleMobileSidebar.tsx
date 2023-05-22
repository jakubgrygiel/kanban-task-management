import styled from "styled-components";
import useBoardCRUD from "@/hooks/crud-hooks/useBoardCRUD";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  border: none;
  background-color: transparent;

  @media (min-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;

const BoardTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainText};
  font-size: 1.125rem;
`;

interface IToggleMobileSidebarProps {
  toggleSidebar: () => void;
}

export default function ToggleMobileSidebar({
  toggleSidebar,
}: IToggleMobileSidebarProps) {
  const { board } = useBoardCRUD();

  return (
    <StyledWrapper onClick={toggleSidebar}>
      <BoardTitle>{board ? board.title : "Add New Board"}</BoardTitle>
      <img src="/assets/icon-chevron-down.svg" alt="open board icon" />
    </StyledWrapper>
  );
}
