import styled from "styled-components";
import { ISidebarIsOpen } from "../sidebar/Sidebar";
import AddNewColumnBtn from "./AddNewColumnBtn";

const StyledWrapper = styled.div<ISidebarIsOpen>`
  position: absolute;
  inset: 0;
  left: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.3s ease-in-out;
`;

const EmptyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
interface ITaskWrapperProps {
  isOpen: boolean;
}

export default function TasksWrapper({ isOpen }: ITaskWrapperProps) {
  return (
    <>
      <StyledWrapper isOpen={isOpen}>
        <EmptyInfo>
          <p>This board is empty. Create a new column to get started.</p>
          <AddNewColumnBtn />
        </EmptyInfo>
      </StyledWrapper>
    </>
  );
}
