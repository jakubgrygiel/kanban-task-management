import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  height: 48px;
  padding: 0 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.buttonAddTaskText};
  background-color: transparent;
  border: none;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBg};
  }
`;

export default function MoreBtn() {
  return (
    <StyledWrapper>
      <img
        src="assets/icon-vertical-ellipsis.svg"
        alt="icon for more options"
      />
    </StyledWrapper>
  );
}
