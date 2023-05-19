import { DarkModeCtx } from "@/context/DarkModeCtx";
import { useContext } from "react";
import styled from "styled-components";
import AddNewTaskBtn from "./AddNewTaskBtn";
import MoreBtn from "../ui/MoreBtn";
import EditTaskBtn from "./EditBoardBtn";
import DeleteTaskBtn from "./DeleteBoardBtn";

const StyledWrapper = styled.div`
  z-index: ${({ theme }) => theme.zLevels.level2};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 300px;
  padding-left: 32px;
  border-right: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: calc(100% - 300px);
  padding: 24px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const BoardTitle = styled.h1`
  font-size: 24px;
`;

export default function Header() {
  const { darkMode } = useContext(DarkModeCtx);
  return (
    <StyledWrapper>
      <LogoWrapper>
        {darkMode ? (
          <img src="/assets/logo-light.svg" alt="logo of the app" />
        ) : (
          <img src="/assets/logo-dark.svg" alt="logo of the app" />
        )}
      </LogoWrapper>
      <MainWrapper>
        <BoardTitle>Platform Launch</BoardTitle>
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
