import { useContext } from "react";
import { DataCtx } from "@/context/DataCtx";
import { updateSubtaskData } from "@/utils/crud";
import { ModalsCtx } from "@/context/ModalsCtx";

export default function useSubtaskCRUD() {
  const { data, activeBoardId, updateData } = useContext(DataCtx);
  const {
    currentTaskIds: { columnId, taskId },
  } = useContext(ModalsCtx);

  function updateSubtaskCompletedState(
    subtaskId: string,
    currentState: boolean
  ) {
    const newData = updateSubtaskData(
      data!,
      { boardId: activeBoardId, columnId, taskId, subtaskId },
      "isCompleted",
      !currentState
    );
    updateData(newData);
  }

  function updateSubtaskStatus(subtaskId: string, currentState: boolean) {
    updateSubtaskCompletedState(subtaskId, currentState);
  }

  return { updateSubtaskStatus };
}
