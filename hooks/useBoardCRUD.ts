import { deepCopyObject } from "@/utils/helpers";
import useData from "./useData";
import { createId } from "@paralleldrive/cuid2";
import { IData, UpdateEnum, UpdateType } from "@/data/initialData";

export default function useBoardCRUD() {
  const { activeBoardId, data, updateData } = useData();

  function addBoard(newData: IData) {}

  function updateBoard(newData: IData) {}

  function deleteBoard(newData: IData) {}

  function updateBoardData(updateType: UpdateType) {
    const newData = deepCopyObject(data);
    if (updateType === UpdateEnum.ADD) {
      addBoard(newData);
    }
    if (updateType === UpdateEnum.UPDATE) {
      updateBoard(newData);
    }
    if (updateType === UpdateEnum.DELETE) {
      deleteBoard(newData);
    }
    updateData(newData);
  }

  return { updateBoardData };
}
