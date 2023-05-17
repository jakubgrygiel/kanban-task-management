import { FormEvent, useRef } from "react";
import styled from "styled-components";

const StyledWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  list-style: none;
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
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    font-weight: 500;
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.inputHoverBorder};
  }
`;

const DeleteItemBtn = styled.button`
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

interface IItemInputProps {
  subtaskId: string;
  placeholder: string;
  value: string;
  updateTaskItem: (subtaskId: string, newValue: string) => void;
}

export default function ItemInput({
  subtaskId,
  placeholder,
  value,
  updateTaskItem,
}: IItemInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange() {
    inputRef.current && updateTaskItem(subtaskId, inputRef.current.value);
  }

  function handleClick(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <StyledWrapper>
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <DeleteItemBtn onClick={handleClick}>
        <img src="/assets/icon-cross.svg" alt="delete subtask icon" />
      </DeleteItemBtn>
    </StyledWrapper>
  );
}
