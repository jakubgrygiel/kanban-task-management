import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { IData, ITask, UpdateEnum, UpdateType } from "@/data/initialData";
import { useContext, useEffect, useState } from "react";
import { DataCtx } from "@/context/DataCtx";
import {
  deleteTaskData,
  getTaskData,
  updateTaskStatusData,
} from "@/utils/crud";
import { ModalsCtx } from "@/context/ModalsCtx";

export default function useTaskCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);
  const {
    currentTaskIds: { columnId, taskId },
    updateTaskIds,
  } = useContext(ModalsCtx);
  const [task, setTask] = useState<ITask>();

  useEffect(() => {
    if (data) {
      const taskData = getTaskData(data, activeBoardId, columnId, taskId);
      setTask(taskData);
    }
  }, [data]);

  function addNewTask(newTaskData: ITask) {}

  function updateTask(boardId: string, newTaskData: ITask) {}

  function deleteTask(taskId: string) {
    const newData = deleteTaskData(data!, activeBoardId, columnId, taskId);
    updateData(newData);
  }

  function updateStatus(status: string) {
    let newTask: ITask = deepCopyObject(task);
    newTask.status = status;
    const newData = deleteTaskData(data!, activeBoardId, columnId, taskId);
    const { updatedData, newCurrentTaskIds } = updateTaskStatusData(
      newData,
      activeBoardId,
      newTask
    );
    updateData(updatedData);
    updateTaskIds(newCurrentTaskIds);
  }

  function update(
    updateType: UpdateType,
    taskId?: string,
    newTaskData?: ITask
  ) {
    if (newTaskData && updateType === UpdateEnum.ADD) {
      addNewTask(newTaskData);
    }
    if (newTaskData && taskId && updateType === UpdateEnum.UPDATE) {
      updateTask(taskId, newTaskData);
    }
    if (taskId && updateType === UpdateEnum.DELETE) {
      deleteTask(taskId);
    }
  }
  return { update, task, updateStatus };
}
