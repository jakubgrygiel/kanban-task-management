import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { IData, UpdateEnum, UpdateType } from "@/data/initialData";
import { DataCtx } from "@/context/DataCtx";
import { useContext } from "react";

export default function useBoardCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);

  function addBoard(data: IData) {
    let newData = deepCopyObject(data);
    return newData;
  }

  function updateBoard(data: IData) {
    let newData = deepCopyObject(data);
    return newData;
  }

  function deleteBoard(data: IData) {
    let newData = deepCopyObject(data);
    return newData;
  }

  function updateBoardData(updateType: UpdateType) {
    let newData: IData = deepCopyObject(data);
    if (updateType === UpdateEnum.ADD) {
      newData = addBoard(newData);
    }
    if (updateType === UpdateEnum.UPDATE) {
      newData = updateBoard(newData);
    }
    if (updateType === UpdateEnum.DELETE) {
      newData = deleteBoard(newData);
    }
    updateData(newData);
  }

  return { updateBoardData };
}
