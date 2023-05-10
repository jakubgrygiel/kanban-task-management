import { deepCopyObject } from "@/utils/helpers";
import useData from "./useData";
import { createId } from "@paralleldrive/cuid2";
import { IData, UpdateEnum, UpdateType } from "@/data/initialData";

export default function useTaskCRUD() {
  const { activeBoardId, data, updateData } = useData();

  function addTask(newData: IData, columnId: string, taskId: string) {}

  function updateTask(newData: IData, columnId: string, taskId: string) {}

  function deleteTask(newData: IData, columnId: string, taskId: string) {}

  function updateTaskData(
    taskId: string,
    columnId: string,
    updateType: UpdateType
  ) {
    const newData = deepCopyObject(data);
    if (updateType === UpdateEnum.ADD) {
      addTask(newData, columnId, taskId);
    }
    if (updateType === UpdateEnum.UPDATE) {
      updateTask(newData, columnId, taskId);
    }
    if (updateType === UpdateEnum.DELETE) {
      deleteTask(newData, columnId, taskId);
    }
    updateData(newData);
  }

  return { updateTaskData };
}
