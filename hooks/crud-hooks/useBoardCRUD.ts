import { IBoard, UpdateEnum, UpdateType } from "@/data/initialData";
import { DataCtx } from "@/context/DataCtx";
import { useContext, useEffect, useState } from "react";
import { deleteBoardData, getBoardData } from "@/utils/crud";

export default function useBoardCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);
  const [board, setBoard] = useState<IBoard>();

  useEffect(() => {
    if (data) {
      const boardData = getBoardData(data, activeBoardId);
      setBoard(boardData);
    }
  }, [data]);

  function addNewBoard(newBoardData: IBoard) {}

  function updateBoard(boardId: string, newBoardData: IBoard) {}

  function deleteBoard(boardId: string) {
    const newData = deleteBoardData(data!, boardId);
    updateData(newData);
  }

  function update(
    updateType: UpdateType,
    boardId?: string,
    newBoardData?: IBoard
  ) {
    if (newBoardData && updateType === UpdateEnum.ADD) {
      addNewBoard(newBoardData);
    }
    if (newBoardData && boardId && updateType === UpdateEnum.UPDATE) {
      updateBoard(boardId, newBoardData);
    }
    if (boardId && updateType === UpdateEnum.DELETE) {
      deleteBoard(boardId);
    }
  }

  return { board, update };
}
