import { ModalsCtx } from "@/context/ModalsCtx";
import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding: 1rem;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.backdropBg};
  transition: opacity 0.3s ease-in-out;
  animation: ${fadeIn} 0.3s linear;
`;

const ModalScrollWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.modalBg};
  animation: ${fadeIn} 0.3s linear;
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding: 1rem;
  }
`;

// const ModalContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
//   gap: 1.5rem;
//   width: 100%;
// `;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 100%;
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.modalBg};
  animation: ${fadeIn} 0.3s linear;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding: 1rem;
  }
`;

interface IModalWrapperProps {
  children: React.ReactNode;
}

export default function ModalWrapper({ children }: IModalWrapperProps) {
  const { closeModal } = useContext(ModalsCtx);

  useEffect(() => {
    function closeModalOnEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    window.addEventListener("keydown", closeModalOnEsc);
    return () => {
      window.removeEventListener("keydown", closeModalOnEsc);
    };
  }, []);

  function handleClick() {
    closeModal();
  }

  return (
    <StyledWrapper>
      <Backdrop onClick={handleClick} />
      {/* <ModalScrollWrapper> */}
      <ModalContainer>{children}</ModalContainer>
      {/* </ModalScrollWrapper> */}
    </StyledWrapper>
  );
}
