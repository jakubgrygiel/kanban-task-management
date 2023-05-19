import {
  ITask,
  initialEmptySubtask,
  initialEmptyTask,
} from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useEffect, useState } from "react";
import useTaskCRUD from "../crud-hooks/useTaskCRUD";

export default function useFormTask() {
  const [formData, setFormData] = useState<ITask>();
  const { task } = useTaskCRUD();

  useEffect(() => {
    getTaskData();
  }, []);

  function getTaskData() {
    if (task) {
      setFormData(task);
    } else {
      setInitialTaskData();
    }
  }

  function setInitialTaskData() {
    const newTask: ITask = deepCopyObject(initialEmptyTask);
    const newSubtask1 = { ...initialEmptySubtask };
    const newSubtask2 = { ...initialEmptySubtask };
    newTask.id = createId();
    newSubtask1.id = createId();
    newSubtask2.id = createId();
    newTask.subtasks = [newSubtask1, newSubtask2];
    setFormData(newTask);
  }

  function updateFormData(newData: ITask) {
    setFormData(newData);
  }

  return { formData, updateFormData };
}
