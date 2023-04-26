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

  &::placeholder {
    font-weight: 500;
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;

interface IModalInputProps {
  id: string;
  name: string;
  placeholder: string;
}

export default function ModalInput({
  id,
  name,
  placeholder,
}: IModalInputProps) {
  return (
    <StyledWrapper>
      <Label htmlFor={id}>{name}</Label>
      <Input id={id} type="text" placeholder={placeholder} />
    </StyledWrapper>
  );
}
