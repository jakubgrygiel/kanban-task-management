import initialData, { IBoard } from "@/data/initialData";
import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [activeBoardId, setActiveBoardId] = useState<string | null>(null);
  const [data, setData] = useState<IBoard[] | null>();

  // useEffect(() => {
  //   const activeBoard = initialData.boards.find(
  //     (board: IBoard) => board.isActive
  //   );
  //   if (activeBoard) {
  //     setActiveBoardId(activeBoard.id);
  //   } else {
  //     setActiveBoardId(null);
  //   }
  // }, []);

  return activeBoardId;
}
