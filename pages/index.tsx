import HomeCard from "@/components/home/HomeCard";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Home() {
  return (
    <>
      <StyledWrapper>
        <HomeCard />
      </StyledWrapper>
    </>
  );
}
