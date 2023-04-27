import styled from "styled-components";
import ModalInput from "./ModalInput";
import ModalTextarea from "./ModalTextarea";
import { FormEvent } from "react";
import ItemList from "./ItemList";
import StatusInput from "./StatusInput";

const StyledWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const CreateEditTaskBtn = styled.button`
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

interface IAddEditTaskFormProps {
  editMode: boolean;
}

export default function AddEditTaskForm({ editMode }: IAddEditTaskFormProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <StyledWrapper>
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
      <ItemList label="Subtasks" type="Subtask" />
      <StatusInput name="Status" id="status" />
      <CreateEditTaskBtn onClick={handleClick}>
        {editMode ? "Save changes" : "Create New Task"}
      </CreateEditTaskBtn>
    </StyledWrapper>
  );
}
