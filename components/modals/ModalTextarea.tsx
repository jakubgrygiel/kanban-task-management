import { useRef } from "react";
import styled from "styled-components";
import { IInput } from "./ModalInput";
import InputContainer from "./InputContainer";

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

const Textarea = styled.textarea<IInput>`
  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.inputText};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.inputInvalidBorder : theme.colors.inputBorder};
  border-radius: 0.25rem;
  resize: none;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.inputHoverBorder};
  }
`;

interface IModalTextareaProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  hasError: boolean;
  updateValue: (path: string, newValue: string | boolean) => void;
  handleBlur: () => void;
}

export default function ModalTextarea({
  id,
  name,
  value,
  placeholder,
  hasError,
  updateValue,
  handleBlur,
}: IModalTextareaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleChange() {
    inputRef.current && updateValue(id, inputRef.current.value);
  }

  return (
    <StyledWrapper>
      <Label htmlFor={id}>{name}</Label>
      <InputContainer hasError={hasError}>
        <Textarea
          ref={inputRef}
          id={id}
          value={value}
          placeholder={placeholder}
          rows={4}
          hasError={hasError}
          onChange={handleChange}
          onBlur={handleBlur}
        ></Textarea>
      </InputContainer>
    </StyledWrapper>
  );
}
