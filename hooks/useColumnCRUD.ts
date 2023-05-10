import { IData, UpdateEnum, UpdateType } from "@/data/initialData";
import useData from "./useData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";

export default function useColumnCRUD() {
  const { activeBoardId, data, updateData } = useData();

  function addColumn(newData: IData, columnId: string) {}

  function updateColumn(newData: IData, columnId: string) {}

  function deleteColumn(newData: IData, columnId: string) {}

  function updateColumnData(columnId: string, updateType: UpdateType) {
    const newData = deepCopyObject(data);
    if (updateType === UpdateEnum.ADD) {
      addColumn(newData, columnId);
    }
    if (updateType === UpdateEnum.UPDATE) {
      updateColumn(newData, columnId);
    }
    if (updateType === UpdateEnum.DELETE) {
      deleteColumn(newData, columnId);
    }
    updateData(newData);
  }

  return { updateColumnData };
}
