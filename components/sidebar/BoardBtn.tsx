import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  height: 48px;
  width: 100%;
  padding-left: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.buttonBoardBg};
  border: none;
  border-radius: 0 24px 24px 0;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.purpleText};
    background-color: ${({ theme }) => theme.colors.buttonBoardHoverBg};
  }
`;

export default function BoardBtn() {
  return <StyledWrapper>Board</StyledWrapper>;
}
