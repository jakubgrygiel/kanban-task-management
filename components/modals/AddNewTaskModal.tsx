import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import ModalInput from "./ModalInput";
import ModalTextarea from "./ModalTextarea";
import SubtasksModal from "./SubtasksModal";
import StatusInput from "./StatusInputModal";
import { FormEvent } from "react";

const ModalTitle = styled.h3`
  font-size: 18px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const CreateTaskBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 40px;
  width: 100%;
  padding: 0 1.25rem;
  text-align: left;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.buttonPrimaryText};
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBg};
  border: none;
  border-radius: 1.25rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHoverBg};
  }
`;

interface IAddNewTaskModalProps {}

export default function AddNewTaskModal() {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <ModalWrapper>
      <ModalTitle>Add New Task</ModalTitle>
      <Form>
        <ModalInput
          id="title-add-new-task"
          name="Title"
          placeholder="e.g. Take coffee break"
        />
        <ModalTextarea
          id="description-add-new-task"
          name="Description"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
        />
        <SubtasksModal />
        <StatusInput id="status-add-new-task" name="Status" />
        <CreateTaskBtn onClick={handleClick}>Create Task</CreateTaskBtn>
      </Form>
    </ModalWrapper>
  );
}
