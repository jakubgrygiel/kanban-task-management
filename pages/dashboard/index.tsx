import styled from "styled-components";
import Header from "@/components/header/Header";
import MainWrapper from "@/components/main/MainWrapper";
import Portal from "@/components/portal/Portal";
import AddNewTaskModal from "@/components/modals/AddNewTaskModal";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Dashboard() {
  return (
    <>
      <StyledWrapper>
        <Header />
        <MainWrapper />
      </StyledWrapper>
      <Portal>
        <AddNewTaskModal />
      </Portal>
    </>
  );
}
