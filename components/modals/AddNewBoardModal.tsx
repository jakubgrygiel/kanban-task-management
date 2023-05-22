import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import AddEditBoardForm from "./AddEditBoardForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

export default function AddNewBoardModal() {
  return (
    <ModalWrapper>
      <ModalTitle>Add New Board</ModalTitle>
      <AddEditBoardForm editMode={false} />
    </ModalWrapper>
  );
}
