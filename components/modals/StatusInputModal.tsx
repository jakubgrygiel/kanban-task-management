import { FormEvent, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  font-size: 0.75rem;
`;

const Button = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.inputText};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 0.25rem;

  &::placeholder {
    font-weight: 500;
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  img {
    position: absolute;
    right: 1rem;
  }
`;

const StatusOptions = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.dropListCardBg};
  box-shadow: ${({ theme }) => theme.colors.dropListCardShadow};
  border-radius: 0.5rem;
`;

const Option = styled.button`
  cursor: pointer;
  padding: 0.25rem 0;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;

interface IStatusInputProps {
  id: string;
  name: string;
}

export default function StatusInput({ id, name }: IStatusInputProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    setIsOptionsOpen((prevState) => !prevState);
  }
  function handleClickOption(e: FormEvent) {
    e.preventDefault();
    setIsOptionsOpen(false);
  }
  return (
    <StyledWrapper>
      <Label htmlFor={id}>{name}</Label>
      <Button id={id} onClick={handleClick}>
        Todo
        <img src="/assets/icon-chevron-down.svg" alt="arrow down icon" />
      </Button>
      {isOptionsOpen && (
        <StatusOptions>
          <Option onClick={handleClickOption}>Todo</Option>
          <Option onClick={handleClickOption}>Doing</Option>
          <Option onClick={handleClickOption}>Done</Option>
        </StatusOptions>
      )}
    </StyledWrapper>
  );
}
