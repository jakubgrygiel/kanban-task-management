import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import EditTaskBtn from "./EditTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";

const StyledWrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zLevels.level2};
`;

const EditDeleteBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  height: 48px;
  padding: 0 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.buttonAddTaskText};
  background-color: transparent;
  border: none;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBg};
  }

  img {
    pointer-events: none;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  left: -164px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 192px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dropListCardBg};
  box-shadow: ${({ theme }) => theme.colors.dropListCardShadow};
`;

export default function MoreBtn() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // function closeOutside(e: MouseEvent) {
    //   if (
    //     isWindowOpen &&
    //     e.target !== dropdownRef.current &&
    //     e.target !== buttonRef.current &&
    //     e.target !== buttonImgRef.current
    //   ) {
    //     closeDropdown();
    //   }
    // }
    // document.body.addEventListener("click", closeOutside);
    // return () => {
    //   document.body.removeEventListener("click", closeOutside);
    // };
  }, []);

  useEffect(() => {
    console.log(isWindowOpen);
  }, [isWindowOpen]);

  function handleClick() {
    setIsWindowOpen((prevState) => !prevState);
  }

  function closeDropdown() {
    setIsWindowOpen(false);
  }

  return (
    <StyledWrapper>
      <EditDeleteBtn onClick={handleClick} ref={buttonRef}>
        <img
          src="assets/icon-vertical-ellipsis.svg"
          alt="icon for more options"
          ref={buttonImgRef}
        />
      </EditDeleteBtn>
      {isWindowOpen && (
        <Dropdown ref={dropdownRef}>
          <EditTaskBtn />
          <DeleteTaskBtn />
        </Dropdown>
      )}
    </StyledWrapper>
  );
}
