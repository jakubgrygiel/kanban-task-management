import styled from "styled-components";
import Header from "@/components/header/Header";
import MainWrapper from "@/components/main/MainWrapper";
import ModalsWrapper from "@/components/modals/ModalsWrapper";
import { useEffect, useState } from "react";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    toggleOnLoad();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", closeSidebarOnMobile);
    return () => window.removeEventListener("resize", closeSidebarOnMobile);
  }, []);

  function toggleOnLoad() {
    if (window.innerWidth >= 700) {
      setIsOpen(true);
    }
    if (window.innerWidth < 700) {
      setIsOpen(false);
    }
  }

  function closeSidebarOnMobile() {
    if (isOpen && window.innerWidth < 700) {
      setIsOpen(false);
    }
  }

  function toggleSidebar() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <StyledWrapper>
        <Header toggleSidebar={toggleSidebar} />
        <MainWrapper isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </StyledWrapper>
      <ModalsWrapper />
    </>
  );
}
