import { DataCtx } from "@/context/DataCtx";
import { IData, UpdateEnum, UpdateType } from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useContext } from "react";

export default function useColumnCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);

  function addColumn(data: IData, columnId: string) {
    let newData = deepCopyObject(data);
    return newData;
  }

  function updateColumn(data: IData, columnId: string) {
    let newData = deepCopyObject(data);
    return newData;
  }

  function deleteColumn(data: IData, columnId: string) {
    let newData = deepCopyObject(data);
    return newData;
  }

  function updateColumnData(columnId: string, updateType: UpdateType) {
    let newData: IData = deepCopyObject(data);
    if (updateType === UpdateEnum.ADD) {
      newData = addColumn(newData, columnId);
    }
    if (updateType === UpdateEnum.UPDATE) {
      newData = updateColumn(newData, columnId);
    }
    if (updateType === UpdateEnum.DELETE) {
      newData = deleteColumn(newData, columnId);
    }
    updateData(newData);
  }

  return { updateColumnData };
}
