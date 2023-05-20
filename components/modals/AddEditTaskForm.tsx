import styled from "styled-components";
import ModalInput from "./ModalInput";
import ModalTextarea from "./ModalTextarea";
import { FormEvent, useContext } from "react";
import ItemList from "./ItemList";
import StatusInput from "./StatusInput";
import { ITask, UpdateEnum, initialEmptySubtask } from "@/data/initialData";
import { deepCopyObject, setProperty } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import useFormTask from "@/hooks/form-hooks/useFormTask";
import { ModalsCtx } from "@/context/ModalsCtx";
import useValidation from "@/hooks/form-hooks/useValidation";

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
  const { closeModal } = useContext(ModalsCtx);
  const {
    formData,
    updateFormData,
    updateAppData,
    updateValidationState,
    handleBlur,
  } = useFormTask(editMode);
  const { handleBlur: handleTitleBlur, hasError: titleHasError } =
    useValidation(formData?.title);
  const { handleBlur: handleDescriptionBlur, hasError: descriptionHasError } =
    useValidation(formData?.description);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    updateAppData();
    closeModal();
  }

  function updateTaskData(path: string, newValue: string | boolean) {
    let newTask: ITask = deepCopyObject(formData);
    newTask = setProperty(newTask, path, newValue);
    updateFormData(newTask);
  }

  function updateSubtask(subtaskId: string, newValue: string) {
    let newTask: ITask = deepCopyObject(formData);
    let indexOfSubtaskToUpdate = newTask.subtasks.findIndex(
      (subtask) => subtask.id === subtaskId
    );
    newTask.subtasks[indexOfSubtaskToUpdate] = setProperty(
      newTask.subtasks[indexOfSubtaskToUpdate],
      "title",
      newValue
    );
    updateFormData(newTask);
    updateValidationState(UpdateEnum.UPDATE, subtaskId, newValue);
  }

  function deleteSubtask(subtaskId: string) {
    let newTask: ITask = deepCopyObject(formData);
    let indexOfSubtaskToDelete = newTask.subtasks.findIndex(
      (subtask) => subtask.id === subtaskId
    );
    newTask.subtasks.splice(indexOfSubtaskToDelete, 1);
    updateFormData(newTask);
    updateValidationState(UpdateEnum.DELETE, subtaskId);
  }

  function addNewSubtask() {
    let newTask: ITask = deepCopyObject(formData);
    let newSubtask = { ...initialEmptySubtask };
    newSubtask.id = createId();
    newTask.subtasks.push(newSubtask);
    updateFormData(newTask);
    updateValidationState(UpdateEnum.ADD, newSubtask.id);
  }

  function changeStatus(status: string) {
    let newTask: ITask = deepCopyObject(formData);
    newTask.status = status;
    updateFormData(newTask);
  }

  return (
    <StyledWrapper>
      {formData && (
        <>
          <ModalInput
            id="title"
            name="Title"
            value={formData.title}
            placeholder="e.g. Take coffee break"
            hasError={titleHasError}
            updateValue={updateTaskData}
            handleBlur={handleTitleBlur}
          />
          <ModalTextarea
            id="description"
            name="Description"
            value={formData.description}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
            hasError={descriptionHasError}
            updateValue={updateTaskData}
            handleBlur={handleDescriptionBlur}
          />
          <ItemList
            label="Subtasks"
            type="Subtask"
            content={formData.subtasks}
            addNewItem={addNewSubtask}
            updateValue={updateSubtask}
            deleteItem={deleteSubtask}
            handleBlur={handleBlur}
          />
          <StatusInput
            name="Status"
            id="status"
            status={formData.status}
            changeStatus={changeStatus}
          />
          <CreateEditTaskBtn onClick={handleClick}>
            {editMode ? "Save changes" : "Create New Task"}
          </CreateEditTaskBtn>
        </>
      )}
    </StyledWrapper>
  );
}
