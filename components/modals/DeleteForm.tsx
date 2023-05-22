import styled from "styled-components";
import { FormEvent, useContext } from "react";
import { ModalsCtx } from "@/context/ModalsCtx";
import useTaskCRUD from "@/hooks/crud-hooks/useTaskCRUD";
import useBoardCRUD from "@/hooks/crud-hooks/useBoardCRUD";
import { UpdateEnum } from "@/data/initialData";
import CancelBtn from "./CancelBtn";

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

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-direction: column;
  }
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

interface IDeleteFormProps {
  label: string;
  description: string;
}

export default function DeleteForm({ label, description }: IDeleteFormProps) {
  const { closeModal } = useContext(ModalsCtx);
  const { updateTaskContent } = useTaskCRUD();
  const { updateBoardContent } = useBoardCRUD();

  function handleClickDelete(e: FormEvent) {
    e.preventDefault();
    if (label === "Board") {
      updateBoardContent(UpdateEnum.DELETE);
    }
    if (label === "Task") {
      updateTaskContent(UpdateEnum.DELETE);
    }
    closeModal();
  }

  return (
    <StyledWrapper>
      <ModalTitle>Delete {label}</ModalTitle>
      <Description>{description}</Description>
      <BtnsWrapper>
        <DeleteBtn onClick={handleClickDelete}>Delete</DeleteBtn>
        <CancelBtn />
      </BtnsWrapper>
    </StyledWrapper>
  );
}
