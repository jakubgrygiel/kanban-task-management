import { createContext, useState } from "react";
interface IDarkModeProviderProps {
  children: React.ReactNode;
}

export const ModalsCtx = createContext({
  isAddTaskOpen: false,
  isEditTaskOpen: false,
  isDeleteTaskOpen: false,
  isAddBoardOpen: false,
  isEditBoardOpen: false,
  isDeleteBoardOpen: false,
  isAddColumnOpen: false,
  isTaskOpen: false,
  closeModal: () => {},
  openModal: (modal: string) => {},
});

export function ModalsCtxProvider({ children }: IDarkModeProviderProps) {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);
  const [isEditBoardOpen, setIsEditBoardOpen] = useState(false);
  const [isDeleteBoardOpen, setIsDeleteBoardOpen] = useState(false);
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);

  function openModal(modal: string) {
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

  function closeModal() {
    closeAllModals();
  }

  const ctx = {
    isAddTaskOpen: isAddTaskOpen,
    isEditTaskOpen: isEditTaskOpen,
    isDeleteTaskOpen: isDeleteTaskOpen,
    isAddBoardOpen: isAddBoardOpen,
    isEditBoardOpen: isEditBoardOpen,
    isDeleteBoardOpen: isDeleteBoardOpen,
    isAddColumnOpen: isAddColumnOpen,
    isTaskOpen: isTaskOpen,
    closeModal: closeModal,
    openModal: openModal,
  };

  return <ModalsCtx.Provider value={ctx}>{children}</ModalsCtx.Provider>;
}
