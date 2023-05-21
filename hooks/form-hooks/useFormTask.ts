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
import useValidation from "./useValidation";

export default function useFormTask(editMode: boolean) {
  const [formData, setFormData] = useState<ITask>();
  const { data, activeBoardId } = useContext(DataCtx);
  const { task, updateTaskContent } = useTaskCRUD();

  const {
    handleBlur: handleBlurTitle,
    hasError: titleHasError,
    isValid: titleIsValid,
  } = useValidation(formData?.title);
  const {
    handleBlur: handleBlurDescription,
    hasError: descriptionHasError,
    isValid: descriptionIsValid,
  } = useValidation(formData?.description);
  const {
    isValid: itemsAreValid,
    itemsValidation,
    handleBlur: handleBlurItems,
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

  const handleBlur = {
    title: handleBlurTitle,
    description: handleBlurDescription,
    items: handleBlurItems,
  };

  const validation = {
    title: titleHasError,
    description: descriptionHasError,
    items: itemsValidation,
  };

  const formIsValid = titleIsValid && descriptionIsValid && itemsAreValid;

  return {
    formIsValid,
    formData,
    updateFormData,
    updateAppData,
    validation,
    updateValidationState,
    handleBlur,
  };
}
