import { ModalsCtx } from "@/context/ModalsCtx";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  height: 48px;
  width: 100%;
  padding-left: 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.purpleText};
  background-color: transparent;
  border: none;
  transition: opacity 0.3s ease-in-out;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.purpleText};
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;

interface IAddBoardBtnProps {
  closeSidebar: () => void;
}

export default function AddBoardBtn({ closeSidebar }: IAddBoardBtnProps) {
  const { openModal } = useContext(ModalsCtx);

  function handleClick() {
    openModal("add-board");
    closeSidebar();
  }

  return (
    <StyledWrapper onClick={handleClick}>
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          fill="#828FA3"
        />
      </svg>
      <span>+ Create New Board</span>
    </StyledWrapper>
  );
}
