import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { FormEvent } from "react";
import AddEditTaskForm from "./AddEditTaskForm";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

interface IAddNewTaskModalProps {}

export default function AddNewTaskModal() {
  return (
    <ModalWrapper>
      <ModalTitle>Add New Task</ModalTitle>
      <AddEditTaskForm editMode={false} />
    </ModalWrapper>
  );
}
