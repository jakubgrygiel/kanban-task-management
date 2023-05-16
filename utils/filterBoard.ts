import { IBoard, IColumn, IData, ISubtask, ITask } from "@/data/initialData";

function getBoard(
  data: IData,
  boardId: string | undefined
): IBoard | undefined {
  if (boardId === undefined) return undefined;
  return data.boards.find((board) => board.id === boardId);
}

function getColumn(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined
): IColumn | undefined {
  const board = getBoard(data, boardId);
  if (board === undefined || columnId === undefined) return undefined;
  return board.columns.find((column) => column.id === columnId);
}

function getTask(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined
): ITask | undefined {
  const column = getColumn(data, boardId, columnId);
  if (column === undefined || taskId === undefined) return undefined;
  return column.tasks.find((task) => task.id === taskId);
}

function getSubtask(
  data: IData,
  boardId: string | undefined,
  columnId: string | undefined,
  taskId: string | undefined,
  subtaskId: string | undefined
): ISubtask | undefined {
  const task = getTask(data, boardId, columnId, taskId);
  if (task === undefined || subtaskId === undefined) return undefined;
  return task.subtasks.find((subtask) => subtask.id === subtaskId);
}

function updateSubtask(
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

  data.boards[boardIdx].columns[columnIdx].tasks[taskIdx].subtasks[subtaskIdx][
    path
  ] = value;
  return data;
}

export { getBoard, getColumn, getTask, getSubtask, updateSubtask };
