import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Error = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: 0.75rem;
  font-weight: 500;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.inputInvalidBorder};
`;

interface IInputContainer {
  hasError: boolean;
  children: React.ReactNode;
}

export default function InputContainer({
  hasError,
  children,
}: IInputContainer) {
  return (
    <StyledWrapper>
      <>{children}</>
      {hasError && <Error>Can’t be empty</Error>}
    </StyledWrapper>
  );
}
