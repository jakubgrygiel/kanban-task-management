import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { IData, UpdateEnum, UpdateType } from "@/data/initialData";
import { useContext } from "react";
import { DataCtx } from "@/context/DataCtx";

export default function useTaskCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);

  function addTask(data: IData, columnId: string, taskId: string): IData {
    const newData = deepCopyObject(data);
    return newData;
  }

  function updateTask(data: IData, columnId: string, taskId: string) {
    const newData = deepCopyObject(data);
    return newData;
  }

  function deleteTask(data: IData, columnId: string, taskId: string) {
    const newData = deepCopyObject(data);
    return newData;
  }

  function updateTaskData(
    taskId: string,
    columnId: string,
    updateType: UpdateType
  ) {
    let newData: IData = deepCopyObject(data);
    if (updateType === UpdateEnum.ADD) {
      newData = addTask(data, columnId, taskId);
    }
    if (updateType === UpdateEnum.UPDATE) {
      newData = updateTask(data, columnId, taskId);
    }
    if (updateType === UpdateEnum.DELETE) {
      newData = deleteTask(data, columnId, taskId);
    }
    updateData(newData);
  }

  return { updateTaskData };
}
