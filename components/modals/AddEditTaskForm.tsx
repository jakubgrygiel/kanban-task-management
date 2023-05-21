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
import CreateBtn from "./CreateBtn";

const StyledWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

interface IAddEditTaskFormProps {
  editMode: boolean;
}

export default function AddEditTaskForm({ editMode }: IAddEditTaskFormProps) {
  const { closeModal } = useContext(ModalsCtx);
  const {
    formIsValid,
    formData,
    updateFormData,
    updateAppData,
    validation,
    updateValidationState,
    handleBlur,
  } = useFormTask(editMode);

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

  function addNewSubtask() {
    let newTask: ITask = deepCopyObject(formData);
    let newSubtask = { ...initialEmptySubtask };
    newSubtask.id = createId();
    newTask.subtasks.push(newSubtask);
    updateFormData(newTask);
    updateValidationState(UpdateEnum.ADD, newSubtask.id);
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
            placeholder="e.g. Take coffee break"
            value={formData.title}
            hasError={validation.title}
            updateValue={updateTaskData}
            handleBlur={handleBlur.title}
          />
          <ModalTextarea
            id="description"
            name="Description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
            value={formData.description}
            updateValue={updateTaskData}
          />
          <ItemList
            label="Subtasks"
            type="Subtask"
            content={formData.subtasks}
            addNewItem={addNewSubtask}
            updateValue={updateSubtask}
            deleteItem={deleteSubtask}
            validation={validation.items}
            handleBlur={handleBlur.items}
          />
          <StatusInput
            name="Status"
            id="status"
            status={formData.status}
            changeStatus={changeStatus}
          />
          <CreateBtn disabled={!formIsValid} handleClick={handleClick}>
            {editMode ? "Save changes" : "Create New Task"}
          </CreateBtn>
        </>
      )}
    </StyledWrapper>
  );
}
