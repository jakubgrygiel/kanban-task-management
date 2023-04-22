import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  height: 48px;
  width: 100%;
  padding-left: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  border-radius: 0 24px 24px 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export default function HideSidebarBtn() {
  return (
    <StyledWrapper>
      <img
        src="assets/icon-hide-sidebar.svg"
        alt="icon for show-hide sidebar"
      />
      <span>Hide Sidebar</span>
    </StyledWrapper>
  );
}
