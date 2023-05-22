import { DarkModeCtx } from "@/context/DarkModeCtx";
import { useContext } from "react";
import styled from "styled-components";
import AddNewTaskBtn from "./AddNewTaskBtn";
import MoreBtn from "../ui/MoreBtn";
import EditTaskBtn from "./EditBoardBtn";
import DeleteTaskBtn from "./DeleteBoardBtn";
import useBoardCRUD from "@/hooks/crud-hooks/useBoardCRUD";
import ToggleMobileSidebar from "./ToggleMobileSidebar";

const StyledWrapper = styled.div`
  z-index: ${({ theme }) => theme.zLevels.level2};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 64px;
  }
`;

const LogoWrapperDesktop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 300px;
  padding-left: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.lightBorder};

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;

const LogoWrapperMobile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    border-right: 1px solid ${({ theme }) => theme.colors.lightBorder};
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: calc(100% - 300px);
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    gap: 1rem;
    width: 100%;
    padding: 1rem;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    gap: 1rem;
  }
`;

const BoardTitle = styled.h1`
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;

interface IHeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: IHeaderProps) {
  const { darkMode } = useContext(DarkModeCtx);
  const { board } = useBoardCRUD();

  return (
    <StyledWrapper>
      <LogoWrapperDesktop>
        {darkMode ? (
          <img src="/assets/logo-light.svg" alt="logo of the app" />
        ) : (
          <img src="/assets/logo-dark.svg" alt="logo of the app" />
        )}
      </LogoWrapperDesktop>
      <LogoWrapperMobile>
        <img src="/assets/logo-mobile.svg" alt="logo of the app" />
      </LogoWrapperMobile>
      <MainWrapper>
        <BoardTitle>{board && board.title}</BoardTitle>
        <ToggleMobileSidebar toggleSidebar={toggleSidebar} />
        <BtnsWrapper>
          <AddNewTaskBtn />
          <MoreBtn>
            <EditTaskBtn />
            <DeleteTaskBtn />
          </MoreBtn>
        </BtnsWrapper>
      </MainWrapper>
    </StyledWrapper>
  );
}
