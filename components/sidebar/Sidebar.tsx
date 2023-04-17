import styled from "styled-components";

const StyledWrapper = styled.div`
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

  &:before {
    position: absolute;
    top: -1px;
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.headerBg};
  }
`;

export default function Sidebar() {
  return (
    <StyledWrapper>
      <div>ALL BOARDS (0)</div>
      <div>Theme</div>
    </StyledWrapper>
  );
}
