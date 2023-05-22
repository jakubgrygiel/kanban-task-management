import styled from "styled-components";
import Input from "./Input";

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

export interface IInput {
  hasError: boolean;
}

interface IModalInputProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  hasError: boolean;
  updateValue: (path: string, newValue: string | boolean) => void;
  handleBlur: () => void;
}

export default function ModalInput({
  id,
  name,
  value,
  placeholder,
  hasError,
  updateValue,
  handleBlur,
}: IModalInputProps) {
  return (
    <StyledWrapper>
      <Label htmlFor={id}>{name}</Label>
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        updateValue={updateValue}
        handleBlur={handleBlur}
      />
    </StyledWrapper>
  );
}
