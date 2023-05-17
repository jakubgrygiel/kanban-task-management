import styled from "styled-components";
import ModalInput from "./ModalInput";
import ModalTextarea from "./ModalTextarea";
import { FormEvent, useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import StatusInput from "./StatusInput";
import { getTask } from "@/utils/filterBoard";
import { DataCtx } from "@/context/DataCtx";
import { ModalsCtx } from "@/context/ModalsCtx";
import {
  ITask,
  initialEmptySubtask,
  initialEmptyTask,
} from "@/data/initialData";
import { deepCopyObject, setProperty } from "@/utils/helpers";
import { create } from "domain";
import { createId } from "@paralleldrive/cuid2";

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
  const { data, activeBoardId } = useContext(DataCtx);
  const { currentTaskIds } = useContext(ModalsCtx);
  const [formData, setFormData] = useState<ITask>();

  useEffect(() => {
    const task = getTask(
      data,
      activeBoardId,
      currentTaskIds.columnId,
      currentTaskIds.taskId
    );
    if (task) {
      setFormData(task);
    } else {
      setInitialTaskData();
    }
  }, []);

  function setInitialTaskData() {
    const newTask: ITask = deepCopyObject(initialEmptyTask);
    const newSubtask1 = { ...initialEmptySubtask };
    const newSubtask2 = { ...initialEmptySubtask };
    newSubtask1.id = createId();
    newSubtask2.id = createId();
    newTask.subtasks = [newSubtask1, newSubtask2];
    setFormData(newTask);
  }

  function handleClick(e: FormEvent) {
    e.preventDefault();
  }

  function updateTaskData(path: string, newValue: string | boolean) {
    let newTask: ITask = deepCopyObject(formData);
    newTask = setProperty(newTask, path, newValue);
    setFormData(newTask);
  }

  function updateTaskItem(subtaskId: string, newValue: string) {
    let newTask: ITask = deepCopyObject(formData);
    let indexOfSubtaskToUpdate = newTask.subtasks.findIndex(
      (subtask) => subtask.id === subtaskId
    );
    newTask.subtasks[indexOfSubtaskToUpdate] = setProperty(
      newTask.subtasks[indexOfSubtaskToUpdate],
      "title",
      newValue
    );
    setFormData(newTask);
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
            updateTaskData={updateTaskData}
          />
          <ModalTextarea
            id="description"
            name="Description"
            value={formData.description}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
            updateTaskData={updateTaskData}
          />
          <ItemList
            label="Subtasks"
            type="Subtask"
            content={formData.subtasks}
            updateTaskItem={updateTaskItem}
          />
          <StatusInput name="Status" id="status" status={formData.status} />
          <CreateEditTaskBtn onClick={handleClick}>
            {editMode ? "Save changes" : "Create New Task"}
          </CreateEditTaskBtn>
        </>
      )}
    </StyledWrapper>
  );
}
