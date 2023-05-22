import styled from "styled-components";
import { FormEvent, useContext } from "react";
import { ModalsCtx } from "@/context/ModalsCtx";

const StyledWrapper = styled.button<ICancelBtn>`
  cursor: pointer;
  height: 40px;
  width: 100%;
  padding: 0 1.25rem;
  font-size: 0.8125rem;
  border: none;
  border-radius: 1.25rem;
  transition: background-color 0.3s ease-in-out;

  color: ${({ theme }) => theme.colors.buttonSecondaryText};
  background-color: ${({ theme }) => theme.colors.buttonSecondaryBg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonSecondaryHoverBg};
  }

  @media (min-width: ${({ theme }) => theme.screens.mobile}) {
    display: ${({ mobile }) => (mobile ? "none" : "inline-block")};
  }
`;

interface ICancelBtn {
  mobile?: boolean;
}

export default function CancelBtn({ mobile }: ICancelBtn) {
  const { closeModal } = useContext(ModalsCtx);

  function handleClickCancel(e: FormEvent) {
    e.preventDefault();
    closeModal();
  }

  return (
    <StyledWrapper mobile={mobile} onClick={handleClickCancel}>
      Cancel
    </StyledWrapper>
  );
}
