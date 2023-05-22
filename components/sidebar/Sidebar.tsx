import styled, { keyframes } from "styled-components";
import BoardsLinks from "./BoardsLinks";
import SidebarSettings from "./SidebarSettings";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

const Wrapper = styled.div<ISidebarIsOpen>`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100dvh - 100px);
  width: 300px;
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-right: 1px solid ${({ theme }) => theme.colors.lightBorder};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;

  &:before {
    position: absolute;
    top: -1px;
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.headerBg};
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: calc(100dvh - 64px);
    width: 100%;
    padding: 1rem;
    background-color: transparent;

    transform: translateY(
      ${({ isOpen }) => (isOpen ? "0" : "calc(-100% - 64px)")}
    );
    transition: transform 0.3s ease-in-out;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.backdropBg};
  opacity: 0;
  animation: ${fadeIn} 0.2s linear 0.3s forwards;

  @media (min-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem 1.5rem 2rem 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.headerBg};

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 1rem 1rem 1rem 0;
  }
`;

export interface ISidebarIsOpen {
  isOpen: boolean;
}

interface ISidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: ISidebarProps) {
  return (
    <Wrapper isOpen={isOpen}>
      {isOpen && <Backdrop onClick={toggleSidebar} />}
      <StyledWrapper>
        <BoardsLinks />
        <SidebarSettings isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </StyledWrapper>
    </Wrapper>
  );
}
