import { IBoard, IColumn, IData, ISubtask, ITask } from "@/data/initialData";
import { deepCopyObject } from "./helpers";
import { ICurrentTaskIds } from "@/context/ModalsCtx";

interface IFindIdx {
  boardIdx: number;
  columnIdx?: number;
  taskIdx?: number;
  subtaskIdx?: number;
}

interface IColumnIds {
  boardId: string | undefined;
  columnId: string | undefined;
}

interface ITaskIds {
  boardId: string | undefined;
  columnId: string | undefined;
  taskId: string | undefined;
}

interface ISubtaskIds {
  boardId: string | undefined;
  columnId: string | undefined;
  taskId: string | undefined;
  subtaskId: string | undefined;
}

function getBoardData(
  data: IData,
  boardId: string | undefined
): IBoard | undefined {
  if (boardId === undefined) return undefined;
  return data.boards.find((board) => board.id === boardId);
}

function getColumnData(
  data: IData,
  columnIds: IColumnIds
): IColumn | undefined {
  const { boardId, columnId } = columnIds;
  const board = getBoardData(data, boardId!);
  if (board === undefined || columnId === undefined) return undefined;
  return board.columns.find((column) => column.id === columnId);
}

function getTaskData(data: IData, taskIds: ITaskIds): ITask | undefined {
  const { boardId, columnId, taskId } = taskIds;
  const column = getColumnData(data, { boardId, columnId });
  if (column === undefined || taskId === undefined) return undefined;
  return column.tasks.find((task) => task.id === taskId);
}

function getSubtaskData(
  data: IData,
  subtaskIds: ISubtaskIds
): ISubtask | undefined {
  const { boardId, columnId, taskId, subtaskId } = subtaskIds;
  const task = getTaskData(data, { boardId, columnId, taskId });
  if (task === undefined || subtaskId === undefined) return undefined;
  return task.subtasks.find((subtask) => subtask.id === subtaskId);
}

function findBoardIdx(data: IData, boardId: string | undefined): number {
  const boardIdx = data.boards.findIndex((board) => board.id === boardId);
  return boardIdx;
}

function findColumnIdx(data: IData, columnIds: IColumnIds): IFindIdx {
  const { boardId, columnId } = columnIds;
  const boardIdx = findBoardIdx(data, boardId!);
  if (boardIdx === -1) return { boardIdx, columnIdx: -1 };
  const columnIdx = data.boards[boardIdx].columns.findIndex(
    (column) => column.id === columnId
  );
  return { boardIdx, columnIdx };
}

function findTaskIdx(data: IData, taskIds: ITaskIds): IFindIdx {
  const { boardId, columnId, taskId } = taskIds;
  const { boardIdx, columnIdx } = findColumnIdx(data, { boardId, columnId });
  if (columnIdx === -1) return { boardIdx, columnIdx, taskIdx: -1 };
  const taskIdx = data.boards[boardIdx].columns[columnIdx!].tasks.findIndex(
    (task) => task.id === taskId
  );
  return { boardIdx, columnIdx, taskIdx };
}

function findSubtaskIdx(data: IData, subtaskIds: ISubtaskIds): IFindIdx {
  const { boardId, columnId, taskId, subtaskId } = subtaskIds;
  const { boardIdx, columnIdx, taskIdx } = findTaskIdx(data, {
    boardId,
    columnId,
    taskId,
  });
  if (taskIdx === -1) return { boardIdx, columnIdx, taskIdx, subtaskIdx: -1 };
  const subtaskIdx = data.boards[boardIdx].columns[columnIdx!].tasks[
    taskIdx!
  ].subtasks.findIndex((subtask) => subtask.id === subtaskId);
  return { boardIdx, columnIdx, taskIdx, subtaskIdx };
}

function findColumnByStatus(data: IData, boardIdx: number, status: string) {
  const columnIdx = data.boards[boardIdx].columns.findIndex(
    (column) => column.title === status
  );
  return columnIdx;
}

function addNewBoardData(data: IData, newBoard: IBoard) {
  let newData: IData = deepCopyObject(data);
  newData.boards.push(newBoard);
  return newData;
}

function addNewTaskData(
  data: IData,
  boardId: string | undefined,
  newTask: ITask
): IData {
  const boardIdx = findBoardIdx(data, boardId);
  if (boardIdx === -1) return data;
  const columnIdx = findColumnByStatus(data, boardIdx, newTask.status);
  if (columnIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards[boardIdx].columns[columnIdx].tasks.push(newTask);
  return newData;
}

function updateBoardData(
  data: IData,
  boardId: string | undefined,
  newBoard: IBoard
): IData {
  const boardIdx = findBoardIdx(data, boardId);
  if (boardIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards[boardIdx] = newBoard;
  newData = updateAllTaskStatus(newData, boardIdx);
  return newData;
}

function updateTaskData(
  data: IData,
  taskIds: ITaskIds,
  newTask: ITask
): { updatedData: IData; newCurrentTaskIds: ICurrentTaskIds } {
  const { boardId, columnId, taskId } = taskIds;
  let newData: IData = deepCopyObject(data);
  const { boardIdx, columnIdx, taskIdx } = findTaskIdx(newData, taskIds);
  if (taskIdx === -1)
    return {
      updatedData: newData,
      newCurrentTaskIds: { columnId: columnId, taskId: taskId },
    };
  const statusChanged = checkForStatusChange(
    newData.boards[boardIdx].columns[columnIdx!].tasks[taskIdx!],
    newTask
  );
  if (statusChanged) {
    newData = deleteTaskData(data, taskIds);
    const { updatedData, newCurrentTaskIds } = updateTaskStatusData(
      newData,
      boardId!,
      newTask
    );
    return {
      updatedData,
      newCurrentTaskIds,
    };
  }
  newData.boards[boardIdx].columns[columnIdx!].tasks[taskIdx!] = newTask;
  return {
    updatedData: newData,
    newCurrentTaskIds: { columnId: columnId, taskId: taskId },
  };
}

function updateSubtaskData(
  data: IData,
  subtaskIds: ISubtaskIds,
  path: string,
  value: any
) {
  const { boardIdx, columnIdx, taskIdx, subtaskIdx } = findSubtaskIdx(
    data,
    subtaskIds
  );
  let newData = deepCopyObject(data);
  newData.boards[boardIdx].columns[columnIdx!].tasks[taskIdx!].subtasks[
    subtaskIdx!
  ][path as keyof ISubtask] = value;
  return newData;
}

function checkForStatusChange(oldTask: ITask, newTask: ITask) {
  return oldTask.status !== newTask.status ? true : false;
}

function updateAllTaskStatus(data: IData, boardIdx: number) {
  const newData: IData = deepCopyObject(data);
  newData.boards[boardIdx].columns = newData.boards[boardIdx].columns.map(
    (column) => {
      column.tasks = column.tasks.map((task) => {
        task.status = column.title;
        return task;
      });
      return column;
    }
  );
  return newData;
}

function updateTaskStatusData(
  data: IData,
  boardId: string | undefined,
  task: ITask
): { updatedData: IData; newCurrentTaskIds: ICurrentTaskIds } {
  const boardIdx = findBoardIdx(data, boardId);
  if (boardIdx === -1)
    return {
      updatedData: data,
      newCurrentTaskIds: { taskId: undefined, columnId: undefined },
    };
  const columnIdx = findColumnByStatus(data, boardIdx, task.status);
  let updatedData: IData = deepCopyObject(data);
  updatedData.boards[boardIdx].columns[columnIdx].tasks.push(task);
  let newCurrentTaskIds: ICurrentTaskIds = {
    taskId: task.id,
    columnId: updatedData.boards[boardIdx].columns[columnIdx].id,
  };
  return { updatedData, newCurrentTaskIds };
}

function deleteBoardData(data: IData, boardId: string | undefined) {
  const boardIdx = findBoardIdx(data, boardId);
  if (boardIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards.splice(boardIdx, 1);
  if (newData.boards.length > 0) {
    newData.boards[0].isActive = true;
  }
  return newData;
}

function deleteTaskData(data: IData, taskIds: ITaskIds) {
  const { boardIdx, columnIdx, taskIdx } = findTaskIdx(data, taskIds);
  if (taskIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards[boardIdx].columns[columnIdx!].tasks.splice(taskIdx!, 1);
  return newData;
}

export {
  getBoardData,
  getColumnData,
  getTaskData,
  getSubtaskData,
  addNewBoardData,
  addNewTaskData,
  updateBoardData,
  updateTaskData,
  updateTaskStatusData,
  updateSubtaskData,
  deleteBoardData,
  deleteTaskData,
};
