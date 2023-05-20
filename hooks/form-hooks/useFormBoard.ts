import { IBoard, UpdateEnum, initialEmptyBoard } from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useEffect, useState } from "react";
import useBoardCRUD from "../crud-hooks/useBoardCRUD";

export default function useFormBoard(editMode: boolean) {
  const [formData, setFormData] = useState<IBoard>();
  const { board, updateBoardContent } = useBoardCRUD();

  useEffect(() => {
    getBoardData();
  }, [board]);

  function getBoardData() {
    if (editMode && board) {
      setFormData(board);
    } else {
      setInitialBoardData();
    }
  }

  function setInitialBoardData() {
    const newBoard: IBoard = deepCopyObject(initialEmptyBoard);
    newBoard.id = createId();
    newBoard.columns.forEach((column) => {
      column.id = createId();
    });
    setFormData(newBoard);
  }

  function updateFormData(newData: IBoard) {
    setFormData(newData);
  }

  function updateAppData() {
    if (editMode) {
      updateBoardContent(UpdateEnum.UPDATE, formData);
      return;
    }
    updateBoardContent(UpdateEnum.ADD, formData);
  }

  return { formData, updateFormData, updateAppData };
}
