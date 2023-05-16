import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { FormEvent, useContext } from "react";
import AddEditTaskForm from "./AddEditTaskForm";
import { ModalsCtx } from "@/context/ModalsCtx";
import { DataCtx } from "@/context/DataCtx";

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

interface IAddNewTaskModalProps {}

export default function AddNewTaskModal() {
  const { activeBoardId } = useContext(DataCtx);

  return (
    <ModalWrapper>
      <ModalTitle>Add New Task</ModalTitle>
      <AddEditTaskForm editMode={false} />
    </ModalWrapper>
  );
}
