import styled from "styled-components";
import { ISidebarIsOpen } from "../sidebar/Sidebar";

const StyledWrapper = styled.div<ISidebarIsOpen>`
  position: absolute;
  inset: 0;
  left: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  transition: left 0.3s ease-in-out;
`;

interface ITaskWrapperProps {
  isOpen: boolean;
}

export default function TasksWrapper({ isOpen }: ITaskWrapperProps) {
  return <StyledWrapper isOpen={isOpen}></StyledWrapper>;
}
