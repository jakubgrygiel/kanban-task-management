import { useRef } from "react";
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

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.inputText};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
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
  updateValue: (path: string, newValue: string | boolean) => void;
}

export default function ModalTextarea({
  id,
  name,
  value,
  placeholder,
  updateValue,
}: IModalTextareaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleChange() {
    inputRef.current && updateValue(id, inputRef.current.value);
  }

  return (
    <StyledWrapper>
      <Label htmlFor={id}>{name}</Label>
      <Textarea
        ref={inputRef}
        id={id}
        value={value}
        placeholder={placeholder}
        rows={4}
        onChange={handleChange}
      ></Textarea>
    </StyledWrapper>
  );
}
