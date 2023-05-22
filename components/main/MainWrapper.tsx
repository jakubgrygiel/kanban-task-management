import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import TasksWrapper from "./TasksWrapper";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: calc(100dvh - 100px);
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: calc(100dvh - 64px);
  }
`;

interface IMainWrapperProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function MainWrapper({
  isOpen,
  toggleSidebar,
}: IMainWrapperProps) {
  return (
    <StyledWrapper>
      <TasksWrapper isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </StyledWrapper>
  );
}
