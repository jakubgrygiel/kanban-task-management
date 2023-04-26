import { FormEvent } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

const Input = styled.input`
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
`;

const DeleteSubtaskBtn = styled.button`
  cursor: pointer;
  padding: 0.2rem;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

interface ISubtaskInputProps {
  id: string;
  placeholder: string;
}

export default function SubtaskInput({ id, placeholder }: ISubtaskInputProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <StyledWrapper>
      <Input id={id} type="text" placeholder={placeholder} />
      <DeleteSubtaskBtn onClick={handleClick}>
        <img src="/assets/icon-cross.svg" alt="delete subtask icon" />
      </DeleteSubtaskBtn>
    </StyledWrapper>
  );
}