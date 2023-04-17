import Header from "@/components/header/Header";
import MainWrapper from "@/components/main/MainWrapper";

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
      <MainWrapper />
    </StyledWrapper>
  );
}
