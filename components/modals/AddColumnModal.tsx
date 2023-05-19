import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { FormEvent } from "react";
import AddEditBoardForm from "./AddEditBoardForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

interface IAddColumnModalProps {}

export default function AddColumnModal() {
  return (
    <ModalWrapper>
      <ModalTitle>Add New Column</ModalTitle>
      <AddEditBoardForm editMode={true} />
    </ModalWrapper>
  );
}
