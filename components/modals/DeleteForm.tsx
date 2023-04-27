import styled from "styled-components";
import { FormEvent, useContext } from "react";
import { describe } from "node:test";
import { ModalsCtx } from "@/context/ModalsCtx";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.redText};
`;

const Description = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  height: 40px;
  width: 100%;
  padding: 0 1.25rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.buttonDeleteText};
  background-color: ${({ theme }) => theme.colors.buttonDeleteBg};
  border: none;
  border-radius: 1.25rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonDeleteHoverBg};
  }
`;

const CancelBtn = styled(DeleteBtn)`
  color: ${({ theme }) => theme.colors.buttonSecondaryText};
  background-color: ${({ theme }) => theme.colors.buttonSecondaryBg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonSecondaryHoverBg};
  }
`;

interface IDeleteFormProps {
  label: string;
  description: string;
}

export default function DeleteForm({ label, description }: IDeleteFormProps) {
  const { closeModal } = useContext(ModalsCtx);

  function handleClickDelete(e: FormEvent) {
    e.preventDefault();
    closeModal();
  }
  function handleClickCancel(e: FormEvent) {
    e.preventDefault();
    closeModal();
  }
  return (
    <StyledWrapper>
      <ModalTitle>Edit {label}</ModalTitle>
      <Description>{description}</Description>
      <BtnsWrapper>
        <DeleteBtn onClick={handleClickDelete}>Delete</DeleteBtn>
        <CancelBtn onClick={handleClickCancel}>Cancel</CancelBtn>
      </BtnsWrapper>
    </StyledWrapper>
  );
}