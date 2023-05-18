import initialData, { IData } from "@/data/initialData";
import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [data, setData] = useState<IData>();

  useEffect(() => {
    setData(readValue());
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const activeBoardId: string | undefined = data?.boards.find(
    (board) => board.isActive
  )?.id;

  function readValue() {
    if (typeof window === "undefined") {
      return initialData;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialData;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialData;
    }
  }

  function updateData(newData: IData) {
    setData(newData);
  }

  return { activeBoardId, data, updateData };
}
