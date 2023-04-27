import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { FormEvent } from "react";
import AddEditBoardForm from "./AddEditBoardForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

interface IAddNewBoardModalProps {}

export default function AddNewBoardModal() {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <ModalWrapper>
      <ModalTitle>Add New Board</ModalTitle>
      <AddEditBoardForm editMode={false} addColumnMode={false} />
    </ModalWrapper>
  );
}
