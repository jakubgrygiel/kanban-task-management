import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";
import HideSidebarBtn from "./HideSidebarBtn";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

interface ISidebarSettingsProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function SidebarSettings({
  isOpen,
  toggleSidebar,
}: ISidebarSettingsProps) {
  return (
    <StyledWrapper>
      <ToggleTheme />
      <HideSidebarBtn isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </StyledWrapper>
  );
}
