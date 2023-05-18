import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import MoreBtn from "../ui/MoreBtn";
import EditTaskBtn from "./EditTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";
import StatusInput from "./StatusInput";
import Subtasks from "./Subtasks";
import { useContext } from "react";
import { ModalsCtx } from "@/context/ModalsCtx";
import { DataCtx } from "@/context/DataCtx";
import {
  getBoard,
  getColumn,
  getTask,
  removeTask,
  updateTask,
  updateTaskStatus,
} from "@/utils/crud";
import { IColumn, ITask } from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

const Description = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

interface ITaskModalProps {}

export default function TaskModal() {
  const { currentTaskIds } = useContext(ModalsCtx);
  const { data, updateData, activeBoardId } = useContext(DataCtx);

  const task = getTask(
    data,
    activeBoardId,
    currentTaskIds.columnId,
    currentTaskIds.taskId
  );

  function changeStatus(status: string) {
    let newTask: ITask = deepCopyObject(task);
    newTask.status = status;
    let newData = removeTask(
      data,
      activeBoardId,
      currentTaskIds.columnId,
      currentTaskIds.taskId
    );
    newData = updateTaskStatus(newData, activeBoardId, task!);
    updateData(newData);
  }

  return (
    <>
      {task ? (
        <ModalWrapper>
          <TopWrapper>
            <ModalTitle>{task.title}</ModalTitle>
            <MoreBtn>
              <EditTaskBtn />
              <DeleteTaskBtn />
            </MoreBtn>
          </TopWrapper>
          <Description>{task.description}</Description>
          <Subtasks content={task.subtasks} />
          <StatusInput
            name="Status"
            id="status"
            status={task.status}
            changeStatus={changeStatus}
          />
        </ModalWrapper>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
