import { deepCopyObject } from "@/utils/helpers";
import { ITask, UpdateEnum, UpdateType } from "@/data/initialData";
import { useContext, useEffect, useState } from "react";
import { DataCtx } from "@/context/DataCtx";
import {
  addNewTaskData,
  deleteTaskData,
  getTaskData,
  updateTaskData,
} from "@/utils/crud";
import { ModalsCtx } from "@/context/ModalsCtx";

export default function useTaskCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);
  const { currentTaskIds, updateTaskIds } = useContext(ModalsCtx);
  const [task, setTask] = useState<ITask>();

  useEffect(() => {
    if (data) {
      const taskData = getTaskData(data, {
        boardId: activeBoardId,
        ...currentTaskIds,
      });
      setTask(taskData);
    }
  }, [data]);

  function addNewTask(newTaskData: ITask) {
    const updatedData = addNewTaskData(data!, activeBoardId, newTaskData);
    updateData(updatedData);
  }

  function updateTask(newTask: ITask) {
    const { updatedData, newCurrentTaskIds } = updateTaskData(
      data!,
      {
        boardId: activeBoardId,
        ...currentTaskIds,
      },
      newTask
    );
    updateData(updatedData);
    updateTaskIds(newCurrentTaskIds);
  }

  function deleteTask() {
    const newData = deleteTaskData(data!, {
      boardId: activeBoardId,
      ...currentTaskIds,
    });
    updateData(newData);
  }

  function updateStatus(status: string) {
    let newTask: ITask = deepCopyObject(task);
    newTask.status = status;
    const { updatedData, newCurrentTaskIds } = updateTaskData(
      data!,
      {
        boardId: activeBoardId,
        ...currentTaskIds,
      },
      newTask
    );
    updateData(updatedData);
    updateTaskIds(newCurrentTaskIds);
  }

  function updateTaskContent(updateType: UpdateType, newTaskData?: ITask) {
    if (newTaskData && updateType === UpdateEnum.ADD) {
      addNewTask(newTaskData);
    }
    if (newTaskData && updateType === UpdateEnum.UPDATE) {
      updateTask(newTaskData);
    }
    if (updateType === UpdateEnum.DELETE) {
      deleteTask();
    }
  }

  return { updateTaskContent, task, updateStatus };
}
