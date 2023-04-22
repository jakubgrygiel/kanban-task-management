import styled from "styled-components";

const StyledWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  border-radius: 12px;
`;

const Circle = styled.span<IChecked>`
  position: absolute;
  top: 3px;
  left: 3px;
  height: 14px;
  width: 14px;
  background-color: ${({ theme }) => theme.colors.whiteBg};
  border-radius: 7px;
  transform: translateX(${({ isChecked }) => (isChecked ? "0" : "20px")});
  transition: transform 0.3s ease-in-out;
`;

interface IChecked {
  isChecked: boolean;
}

interface IToggleCheckboxProps {
  isChecked: boolean;
}

export default function ToggleCheckbox({ isChecked }: IToggleCheckboxProps) {
  return (
    <StyledWrapper>
      <Circle isChecked={isChecked}></Circle>
    </StyledWrapper>
  );
}
