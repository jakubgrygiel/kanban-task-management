import { FormEvent, useRef } from "react";
import styled from "styled-components";
import Input from "./Input";

const StyledWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  list-style: none;
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
  itemId: string;
  placeholder: string;
  value: string;
  hasError: boolean;
  updateItem: (subtaskId: string, newValue: string) => void;
  deleteItem: (subtaskId: string) => void;
  handleBlur: (itemId: string) => void;
}

export default function ItemInput({
  itemId,
  placeholder,
  value,
  hasError,
  updateItem,
  deleteItem,
  handleBlur,
}: IItemInputProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
    deleteItem(itemId);
  }

  return (
    <StyledWrapper>
      <Input
        id={itemId}
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        updateValue={updateItem}
        handleBlur={handleBlur}
      />
      <DeleteItemBtn onClick={handleClick}>
        <img src="/assets/icon-cross.svg" alt="delete subtask icon" />
      </DeleteItemBtn>
    </StyledWrapper>
  );
}
