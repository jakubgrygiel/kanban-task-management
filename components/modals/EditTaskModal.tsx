import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import AddEditTaskForm from "./AddEditTaskForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

interface IEditTaskModalProps {}

export default function EditTaskModal() {
  return (
    <ModalWrapper>
      <ModalTitle>Edit Task</ModalTitle>
      <AddEditTaskForm editMode={true} />
    </ModalWrapper>
  );
}
