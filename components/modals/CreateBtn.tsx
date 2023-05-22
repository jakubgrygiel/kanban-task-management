import { FormEvent } from "react";
import styled from "styled-components";

const CreateEditBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 40px;
  width: 100%;
  padding: 0 1.25rem;
  text-align: left;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.buttonPrimaryText};
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBg};
  border: none;
  border-radius: 1.25rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHoverBg};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

interface ICreateBtnProps {
  children: React.ReactNode;
  disabled: boolean;
  handleClick: (e: FormEvent) => void;
}

export default function CreateBtn({
  children,
  disabled,
  handleClick,
}: ICreateBtnProps) {
  return (
    <CreateEditBtn disabled={disabled} onClick={handleClick}>
      {children}
    </CreateEditBtn>
  );
}
