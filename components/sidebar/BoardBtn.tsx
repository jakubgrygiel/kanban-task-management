import { DataCtx } from "@/context/DataCtx";
import useActiveBoard from "@/hooks/useLocalStorage";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.button<IIsActive>`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  height: 48px;
  width: 100%;
  padding-left: 2rem;
  text-align: left;
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.buttonBoardTextActive
      : theme.colors.buttonBoardText};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.buttonBoardBgActive : "transparent"};
  border: none;
  border-radius: 0 1.5rem 1.5rem 0;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  svg {
    path {
      fill: ${({ theme, isActive }) =>
        isActive
          ? theme.colors.buttonBoardTextActive
          : theme.colors.buttonBoardText};
      transition: fill 0.3s ease-in-out;
    }
  }

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive
        ? theme.colors.buttonBoardTextActive
        : theme.colors.buttonBoardTextHover};
    background-color: ${({ theme, isActive }) =>
      isActive
        ? theme.colors.buttonBoardBgActive
        : theme.colors.buttonBoardBgHover};

    svg {
      path {
        fill: ${({ theme, isActive }) =>
          isActive
            ? theme.colors.buttonBoardTextActive
            : theme.colors.buttonBoardTextHover};
      }
    }
  }
`;

interface IIsActive {
  isActive: boolean;
}

interface IBoardBtnProps {
  id: string;
  name: string;
  isActive: boolean;
  closeSidebar: () => void;
}

export default function BoardBtn({
  name,
  isActive,
  id,
  closeSidebar,
}: IBoardBtnProps) {
  const { changeCurrentBoard } = useContext(DataCtx);

  function handleClick() {
    changeCurrentBoard(id);
    closeSidebar();
  }

  return (
    <StyledWrapper isActive={isActive} onClick={handleClick}>
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          fill="#828FA3"
        />
      </svg>
      <span>{name}</span>
    </StyledWrapper>
  );
}
