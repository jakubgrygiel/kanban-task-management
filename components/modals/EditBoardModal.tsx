import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { FormEvent } from "react";
import AddEditBoardForm from "./AddEditBoardForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

export default function EditBoardModal() {
  return (
    <ModalWrapper>
      <ModalTitle>Edit Board</ModalTitle>
      <AddEditBoardForm editMode={true} />
    </ModalWrapper>
  );
}
