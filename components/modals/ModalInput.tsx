import { useReducer, useRef } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
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

interface IModalInputProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  updateValue: (path: string, newValue: string | boolean) => void;
}

export default function ModalInput({
  id,
  name,
  value,
  placeholder,
  updateValue,
}: IModalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange() {
    inputRef.current && updateValue(id, inputRef.current.value);
  }

  return (
    <StyledWrapper>
      <Label htmlFor={id}>{name}</Label>
      <Input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </StyledWrapper>
  );
}
