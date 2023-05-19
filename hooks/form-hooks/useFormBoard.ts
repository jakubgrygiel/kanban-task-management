import { DataCtx } from "@/context/DataCtx";
import { ModalsCtx } from "@/context/ModalsCtx";
import {
  IBoard,
  ITask,
  initialEmptyBoard,
  initialEmptySubtask,
  initialEmptyTask,
} from "@/data/initialData";
import { getBoard, getTask } from "@/utils/crud";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useContext, useEffect, useState } from "react";

export default function useFormData(type: string) {
  const { data, activeBoardId } = useContext(DataCtx);
  const { currentTaskIds } = useContext(ModalsCtx);
  const [formData, setFormData] = useState<ITask | IBoard>();

  useEffect(() => {
    if (type === "task") {
      getTaskData();
    }
    if (type === "board") {
      getBoardData();
    }
  }, []);

  function getTaskData() {
    const task = getTask(
      data,
      activeBoardId,
      currentTaskIds.columnId,
      currentTaskIds.taskId
    );
    if (task) {
      setFormData(task);
    } else {
      setInitialTaskData();
    }
  }

  function getBoardData() {
    const board = getBoard(data, activeBoardId);
    if (board) {
      setFormData(board);
    } else {
      setInitialBoardData();
    }
  }

  function setInitialTaskData() {
    const newTask: ITask = deepCopyObject(initialEmptyTask);
    const newSubtask1 = { ...initialEmptySubtask };
    const newSubtask2 = { ...initialEmptySubtask };
    newTask.id = createId();
    newSubtask1.id = createId();
    newSubtask2.id = createId();
    newTask.subtasks = [newSubtask1, newSubtask2];
    setFormData(newTask);
  }

  function setInitialBoardData() {
    const newBoard: IBoard = deepCopyObject(initialEmptyBoard);
    newBoard.id = createId();
    newBoard.columns.forEach((column) => {
      column.id = createId();
    });
    setFormData(newBoard);
  }

  function updateFormData(newData: ITask | IBoard) {
    setFormData(newData);
  }

  return { formData, updateFormData };
}
