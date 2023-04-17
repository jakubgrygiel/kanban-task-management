import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Dashboard() {
  return (
    <StyledWrapper>
      <Header />
      <Sidebar />
    </StyledWrapper>
  );
}
