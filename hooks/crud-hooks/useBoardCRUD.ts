import { IBoard, UpdateEnum, UpdateType } from "@/data/initialData";
import { DataCtx } from "@/context/DataCtx";
import { useContext, useEffect, useState } from "react";
import { deleteBoardData, getBoardData } from "@/utils/crud";

export default function useBoardCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);
  const [board, setBoard] = useState<IBoard | undefined>();

  useEffect(() => {
    if (data) {
      const boardData = getBoardData(data, activeBoardId);
      setBoard(boardData);
    }
  }, [data]);

  function addNewBoard(newBoardData: IBoard) {}

  function updateBoard(newBoardData: IBoard) {}

  function deleteBoard() {
    const newData = deleteBoardData(data!, activeBoardId);
    updateData(newData);
  }

  function updateBoardContent(updateType: UpdateType, newBoardData?: IBoard) {
    if (newBoardData && updateType === UpdateEnum.ADD) {
      addNewBoard(newBoardData);
    }
    if (newBoardData && updateType === UpdateEnum.UPDATE) {
      updateBoard(newBoardData);
    }
    if (updateType === UpdateEnum.DELETE) {
      deleteBoard();
    }
  }

  return { board, updateBoardContent };
}
