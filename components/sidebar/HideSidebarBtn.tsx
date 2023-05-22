import styled from "styled-components";
import { ISidebarIsOpen } from "./Sidebar";

const StyledWrapper = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  height: 48px;
  width: 100%;
  padding-left: 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  border-radius: 0 1.5rem 1.5rem 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;

const OpenSidebar = styled.div<ISidebarIsOpen>`
  position: absolute;
  top: 0;
  left: -56px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 56px;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  border-radius: 0 1.5rem 1.5rem 0;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "356px")});
  transition: transform 0.3s ease-in-out;
`;

interface IHideSidebarBtnProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function HideSidebarBtn({
  isOpen,
  toggleSidebar,
}: IHideSidebarBtnProps) {
  function handleClick() {
    toggleSidebar();
  }

  return (
    <StyledWrapper onClick={handleClick}>
      <img src="assets/icon-hide-sidebar.svg" alt="icon for showing sidebar" />
      <span>Hide Sidebar</span>
      <OpenSidebar isOpen={isOpen}>
        <img src="assets/icon-show-sidebar.svg" alt="icon for hiding sidebar" />
      </OpenSidebar>
    </StyledWrapper>
  );
}
