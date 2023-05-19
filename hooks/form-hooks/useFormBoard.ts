import { IBoard, initialEmptyBoard } from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useEffect, useState } from "react";
import useBoardCRUD from "../crud-hooks/useBoardCRUD";

export default function useFormBoard() {
  const [formData, setFormData] = useState<IBoard>();
  const { board } = useBoardCRUD();

  useEffect(() => {
    getBoardData();
  }, []);

  function getBoardData() {
    if (board) {
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

  return { formData, updateFormData };
}
