import { createContext, useState } from "react";
interface IModalsProviderProps {
  children: React.ReactNode;
}

export interface ICurrentTaskIds {
  taskId: string | undefined;
  columnId: string | undefined;
}

interface IModalCtx {
  isAddTaskOpen: boolean;
  isEditTaskOpen: boolean;
  isDeleteTaskOpen: boolean;
  isAddBoardOpen: boolean;
  isEditBoardOpen: boolean;
  isDeleteBoardOpen: boolean;
  isAddColumnOpen: boolean;
  isTaskOpen: boolean;
  currentTaskIds: ICurrentTaskIds;
  updateTaskIds: (newTaskIds: ICurrentTaskIds) => void;
  closeModal: () => void;
  openModal: (modal: string, taskIds?: ICurrentTaskIds) => void;
}

export const ModalsCtx = createContext<IModalCtx>({
  isAddTaskOpen: false,
  isEditTaskOpen: false,
  isDeleteTaskOpen: false,
  isAddBoardOpen: false,
  isEditBoardOpen: false,
  isDeleteBoardOpen: false,
  isAddColumnOpen: false,
  isTaskOpen: false,
  currentTaskIds: { taskId: undefined, columnId: undefined },
  updateTaskIds: (newTaskIds: ICurrentTaskIds) => {},
  closeModal: () => {},
  openModal: (modal: string, taskIds?: ICurrentTaskIds) => {},
});

export function ModalsCtxProvider({ children }: IModalsProviderProps) {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);
  const [isEditBoardOpen, setIsEditBoardOpen] = useState(false);
  const [isDeleteBoardOpen, setIsDeleteBoardOpen] = useState(false);
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [currentTaskIds, setCurrentTaskIds] = useState<ICurrentTaskIds>({
    taskId: undefined,
    columnId: undefined,
  });

  function openModal(modal: string, taskIds?: ICurrentTaskIds) {
    if (taskIds !== undefined) {
      setCurrentTaskIds(taskIds);
    }
    closeAllModals();
    if (modal === "add-task") return setIsAddTaskOpen(true);
    if (modal === "edit-task") return setIsEditTaskOpen(true);
    if (modal === "delete-task") return setIsDeleteTaskOpen(true);
    if (modal === "add-board") return setIsAddBoardOpen(true);
    if (modal === "edit-board") return setIsEditBoardOpen(true);
    if (modal === "delete-board") return setIsDeleteBoardOpen(true);
    if (modal === "add-column") return setIsAddColumnOpen(true);
    if (modal === "task-info") return setIsTaskOpen(true);
  }

  function closeAllModals() {
    setIsAddTaskOpen(false);
    setIsEditTaskOpen(false);
    setIsDeleteTaskOpen(false);
    setIsAddBoardOpen(false);
    setIsEditBoardOpen(false);
    setIsDeleteBoardOpen(false);
    setIsAddColumnOpen(false);
    setIsTaskOpen(false);
  }

  function updateTaskIds(newTaskIds: ICurrentTaskIds) {
    setCurrentTaskIds(newTaskIds);
  }

  function closeModal() {
    closeAllModals();
    // setCurrentTaskIds({ columnId: undefined, taskId: undefined });
  }

  const ctx: IModalCtx = {
    isAddTaskOpen,
    isEditTaskOpen,
    isDeleteTaskOpen,
    isAddBoardOpen,
    isEditBoardOpen,
    isDeleteBoardOpen,
    isAddColumnOpen,
    isTaskOpen,
    currentTaskIds,
    updateTaskIds,
    closeModal,
    openModal,
  };

  return <ModalsCtx.Provider value={ctx}>{children}</ModalsCtx.Provider>;
}
