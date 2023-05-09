import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import TasksWrapper from "./TasksWrapper";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100%;
`;

export default function MainWrapper() {
  const [isOpen, setIsOpen] = useState(true);

  function handleSidebarOpen() {
    setIsOpen(true);
  }

  function handleSidebarClose() {
    setIsOpen(false);
  }

  function toggleSidebar() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <StyledWrapper>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <TasksWrapper isOpen={isOpen} />
    </StyledWrapper>
  );
}
