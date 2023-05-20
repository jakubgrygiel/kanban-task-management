import {
  ITask,
  UpdateEnum,
  initialEmptySubtask,
  initialEmptyTask,
} from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useContext, useEffect, useState } from "react";
import useTaskCRUD from "../crud-hooks/useTaskCRUD";
import { getBoardData } from "@/utils/crud";
import { DataCtx } from "@/context/DataCtx";
import useItemsValidation from "./useItemsValidation";

export default function useFormTask(editMode: boolean) {
  const [formData, setFormData] = useState<ITask>();
  const { data, activeBoardId } = useContext(DataCtx);
  const { task, updateTaskContent } = useTaskCRUD();
  const {
    itemsValidation,
    handleBlur,
    getValidationData,
    updateValidationState,
  } = useItemsValidation();

  useEffect(() => {
    getTaskData();
  }, [task]);

  function getTaskData() {
    if (editMode && task) {
      setFormData(task);
      getValidationData(task.subtasks);
    } else {
      setInitialTaskData();
    }
  }

  function setInitialTaskData() {
    const newTask: ITask = deepCopyObject(initialEmptyTask);
    const newSubtask1 = { ...initialEmptySubtask };
    const newSubtask2 = { ...initialEmptySubtask };
    newTask.id = createId();
    newTask.status = getInitialStatus();
    newSubtask1.id = createId();
    newSubtask2.id = createId();
    newTask.subtasks = [newSubtask1, newSubtask2];
    setFormData(newTask);
    console.log("here");
    getValidationData(newTask.subtasks);
  }

  function getInitialStatus() {
    const currentBoard = getBoardData(data!, activeBoardId);
    return currentBoard ? currentBoard.columns[0].title : "";
  }

  function updateFormData(newData: ITask) {
    setFormData(newData);
  }

  function updateAppData() {
    if (editMode) {
      updateTaskContent(UpdateEnum.UPDATE, formData);
      return;
    }
    updateTaskContent(UpdateEnum.ADD, formData);
  }

  return {
    formData,
    updateFormData,
    updateAppData,
    itemsValidation,
    handleBlur,
    updateValidationState,
  };
}
