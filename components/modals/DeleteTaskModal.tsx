import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import DeleteForm from "./DeleteForm";
import { ModalsCtx } from "@/context/ModalsCtx";
import { DataCtx } from "@/context/DataCtx";
import { useContext } from "react";
import { getTask } from "@/utils/filterBoard";

interface IDeleteTaskModalProps {}

export default function DeleteTaskModal() {
  const { currentTaskIds } = useContext(ModalsCtx);
  const { data, activeBoardId } = useContext(DataCtx);

  const task = getTask(
    data,
    activeBoardId,
    currentTaskIds.columnId,
    currentTaskIds.taskId
  );

  return (
    <ModalWrapper>
      <DeleteForm
        label="Task"
        description={`Are you sure you want to delete the "${
          task ? task.title : "loading"
        }" task and its subtasks? This action cannot be reversed.`}
      />
    </ModalWrapper>
  );
}
