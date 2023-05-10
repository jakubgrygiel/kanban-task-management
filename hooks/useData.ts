import initialData, { IBoard, IData } from "@/data/initialData";
import { useEffect, useState } from "react";

export default function useData() {
  const [data, setData] = useState<IData>({ boards: [] });
  const activeBoardId: string | undefined =
    data.boards.length < 1
      ? undefined
      : data.boards.find((board) => board.isActive)?.id;

  function updateData(newData: IData) {
    setData(newData);
  }

  return { activeBoardId, data, updateData };
}
