import styled from "styled-components";
import BoardsLinks from "./BoardsLinks";
import SidebarSettings from "./SidebarSettings";

const StyledWrapper = styled.div<ISidebarIsOpen>`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 300px;
  padding: 16px 24px 32px 0;
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
`;

export interface ISidebarIsOpen {
  isOpen: boolean;
}

interface ISidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: ISidebarProps) {
  return (
    <StyledWrapper isOpen={isOpen}>
      <BoardsLinks />
      <SidebarSettings />
    </StyledWrapper>
  );
}
