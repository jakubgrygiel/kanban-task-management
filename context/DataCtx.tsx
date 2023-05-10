import { IBoard, IData } from "@/data/initialData";
import useLocalStorage from "@/hooks/useLocalStorage";
import { deepCopyObject } from "@/utils/helpers";
import { createContext } from "react";

interface IDataProviderProps {
  children: React.ReactNode;
}

interface IDataCtx {
  data: IData;
  activeBoardId: string | undefined;
  updateData: (newData: IData) => void;
  changeCurrentBoard: (id: string) => void;
}

export const DataCtx = createContext<IDataCtx>({
  data: { boards: [] },
  activeBoardId: undefined,
  updateData: (newData: IData) => {},
  changeCurrentBoard: (id: string) => {},
});

export function DataCtxProvider({ children }: IDataProviderProps) {
  const { data, updateData, activeBoardId } = useLocalStorage("data");

  function changeCurrentBoard(id: string) {
    let newData = deepCopyObject(data);
    newData.boards = newData.boards.map((board: IBoard) => {
      if (board.id === id) {
        return { ...board, isActive: true };
      } else {
        return { ...board, isActive: false };
      }
    });
    updateData(newData);
  }

  const ctx: IDataCtx = {
    data,
    activeBoardId,
    updateData,
    changeCurrentBoard,
  };

  return <DataCtx.Provider value={ctx}>{children}</DataCtx.Provider>;
}
