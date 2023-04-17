import styled from "styled-components";

const StyledWrapper = styled.div`
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
  width: calc(100% - 300px);
  padding: 24px;
`;

const BoardTitle = styled.h1`
  font-size: 24px;
`;

export default function Header() {
  return (
    <StyledWrapper>
      <LogoWrapper>
        <img src="/assets/logo-light.svg" alt="logo of the app" />
      </LogoWrapper>
      <MainWrapper>
        <BoardTitle>Platform Launch</BoardTitle>
        <div>Add New Task</div>
      </MainWrapper>
    </StyledWrapper>
  );
}
