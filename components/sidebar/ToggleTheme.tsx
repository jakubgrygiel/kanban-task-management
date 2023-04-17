import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  padding-left: 24px;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.themeCardBg};
  border-radius: 6px;
`;

export default function ToggleTheme() {
  return (
    <StyledWrapper>
      <ToggleWrapper>THEME</ToggleWrapper>
    </StyledWrapper>
  );
}
