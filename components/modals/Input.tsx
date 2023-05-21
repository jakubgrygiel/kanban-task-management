import styled from "styled-components";
import InputContainer from "./InputContainer";
import { useRef } from "react";

const InputElement = styled.input<IInputElement>`
  height: 40px;
  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.inputText};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.inputInvalidBorder : theme.colors.inputBorder};
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

export interface IInputElement {
  hasError: boolean;
}

interface IInputProps {
  id: string;
  value: string;
  placeholder: string;
  hasError: boolean;
  updateValue: any;
  handleBlur: any;
}

export default function Input({
  id,
  value,
  placeholder,
  hasError,
  updateValue,
  handleBlur,
}: IInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange() {
    inputRef.current && updateValue(id, inputRef.current.value);
  }

  return (
    <InputContainer hasError={hasError}>
      <InputElement
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        hasError={hasError}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={() => handleBlur(id)}
      />
    </InputContainer>
  );
}
