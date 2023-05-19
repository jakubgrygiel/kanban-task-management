import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { FormEvent } from "react";
import AddEditBoardForm from "./AddEditBoardForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

interface IEditBoardModalProps {}

export default function EditBoardModal() {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <ModalWrapper>
      <ModalTitle>Edit Board</ModalTitle>
      <AddEditBoardForm editMode={true} />
    </ModalWrapper>
  );
}
