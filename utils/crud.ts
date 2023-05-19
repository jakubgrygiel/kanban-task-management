import { IBoard, IColumn, IData, ISubtask, ITask } from "@/data/initialData";
import { deepCopyObject } from "./helpers";
import { ICurrentTaskIds } from "@/context/ModalsCtx";

function getBoardData(
  data: IData,
  boardId: string | undefined
): IBoard | undefined {
  if (boardId === undefined) return undefined;
  return data.boards.find((board) => board.id === boardId);
}

function getColumnData(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined
): IColumn | undefined {
  const board = getBoardData(data, boardId);
  if (board === undefined || columnId === undefined) return undefined;
  return board.columns.find((column) => column.id === columnId);
}

function getTaskData(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined
): ITask | undefined {
  const column = getColumnData(data, boardId, columnId);
  if (column === undefined || taskId === undefined) return undefined;
  return column.tasks.find((task) => task.id === taskId);
}

function getSubtaskData(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined,
  subtaskId: string | undefined
): ISubtask | undefined {
  const task = getTaskData(data, boardId, columnId, taskId);
  if (task === undefined || subtaskId === undefined) return undefined;
  return task.subtasks.find((subtask) => subtask.id === subtaskId);
}

function updateSubtaskData(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined,
  subtaskId: string | undefined,
  path: string,
  value: any
) {
  const boardIdx = data.boards.findIndex((board) => board.id === boardId);
  if (boardIdx === -1) return data;
  const columnIdx = data.boards[boardIdx].columns.findIndex(
    (column) => column.id === columnId
  );
  if (columnIdx === -1) return data;
  const taskIdx = data.boards[boardIdx].columns[columnIdx].tasks.findIndex(
    (task) => task.id === taskId
  );
  if (taskIdx === -1) return data;
  const subtaskIdx = data.boards[boardIdx].columns[columnIdx].tasks[
    taskIdx
  ].subtasks.findIndex((subtask) => subtask.id === subtaskId);
  let newData = deepCopyObject(data);
  newData.boards[boardIdx].columns[columnIdx].tasks[taskIdx].subtasks[
    subtaskIdx
  ][path as keyof ISubtask] = value;
  return newData;
}

function updateTaskData(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined,
  path: string,
  value: any
) {
  const boardIdx = data.boards.findIndex((board) => board.id === boardId);
  if (boardIdx === -1) return data;
  const columnIdx = data.boards[boardIdx].columns.findIndex(
    (column) => column.id === columnId
  );
  if (columnIdx === -1) return data;
  const taskIdx = data.boards[boardIdx].columns[columnIdx].tasks.findIndex(
    (task) => task.id === taskId
  );
  if (taskIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards[boardIdx].columns[columnIdx].tasks[taskIdx][
    path as keyof ITask
  ] = value;
  return newData;
}

function updateTaskStatusData(
  data: IData,
  boardId: string | undefined,
  task: ITask
): { updatedData: IData; newCurrentTaskIds: ICurrentTaskIds } {
  const boardIdx = data.boards.findIndex((board) => board.id === boardId);
  if (boardIdx === -1)
    return {
      updatedData: data,
      newCurrentTaskIds: { taskId: undefined, columnId: undefined },
    };
  const columnIdx = data.boards[boardIdx].columns.findIndex(
    (column) => column.title === task.status
  );
  let updatedData: IData = deepCopyObject(data);
  updatedData.boards[boardIdx].columns[columnIdx].tasks.push(task);
  let newCurrentTaskIds: ICurrentTaskIds = {
    taskId: task.id,
    columnId: updatedData.boards[boardIdx].columns[columnIdx].id,
  };
  return { updatedData, newCurrentTaskIds };
}

function deleteTaskData(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined
) {
  const boardIdx = data.boards.findIndex((board) => board.id === boardId);
  if (boardIdx === -1) return data;
  const columnIdx = data.boards[boardIdx].columns.findIndex(
    (column) => column.id === columnId
  );
  if (columnIdx === -1) return data;
  const taskIdx = data.boards[boardIdx].columns[columnIdx].tasks.findIndex(
    (task) => task.id === taskId
  );
  if (taskIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards[boardIdx].columns[columnIdx].tasks.splice(taskIdx, 1);
  return newData;
}

function deleteBoardData(data: IData, boardId: string | undefined) {
  const boardIdx = data.boards.findIndex((board) => board.id === boardId);
  if (boardIdx === -1) return data;
  let newData: IData = deepCopyObject(data);
  newData.boards.splice(boardIdx, 1);
  if (newData.boards.length > 0) {
    newData.boards[0].isActive = true;
  }
  return newData;
}

export {
  getBoardData,
  getColumnData,
  getTaskData,
  getSubtaskData,
  updateSubtaskData,
  updateTaskData,
  updateTaskStatusData,
  deleteBoardData,
  deleteTaskData,
};
