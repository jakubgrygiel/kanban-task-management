import initialData, { IData } from "@/data/initialData";
import useLocalStorage from "@/hooks/useLocalStorage";
import useData from "@/hooks/useLocalStorage";
import { createContext, useEffect, useState } from "react";

interface IDataProviderProps {
  children: React.ReactNode;
}

interface IDataCtx {
  data: IData;
  activeBoardId: string | undefined;
  updateData: (newData: IData) => void;
}

export const DataCtx = createContext<IDataCtx>({
  data: { boards: [] },
  activeBoardId: undefined,
  updateData: (newData: IData) => {},
});

export function DataCtxProvider({ children }: IDataProviderProps) {
  const { data, updateData, activeBoardId } = useLocalStorage("data");

  const ctx: IDataCtx = {
    data,
    activeBoardId,
    updateData,
  };

  return <DataCtx.Provider value={ctx}>{children}</DataCtx.Provider>;
}
