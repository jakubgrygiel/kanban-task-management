import { ModalsCtx } from "@/context/ModalsCtx";
import { useContext } from "react";
import Portal from "../portal/Portal";
import AddNewTaskModal from "./AddNewTaskModal";
import EditTaskModal from "./EditTaskModal";
import DeleteTaskModal from "./DeleteTaskModal";
import AddNewBoardModal from "./AddNewBoardModal";
import EditBoardModal from "./EditBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";
import TaskModal from "./TaskModal";
import AddColumnModal from "./AddColumnModal";

export default function ModalsWrapper() {
  const {
    isAddTaskOpen,
    isEditTaskOpen,
    isDeleteTaskOpen,
    isAddBoardOpen,
    isEditBoardOpen,
    isDeleteBoardOpen,
    isAddColumnOpen,
    isTaskOpen,
  } = useContext(ModalsCtx);
  return (
    <>
      {isAddTaskOpen && (
        <Portal>
          <AddNewTaskModal />
        </Portal>
      )}
      {isEditTaskOpen && (
        <Portal>
          <EditTaskModal />
        </Portal>
      )}
      {isDeleteTaskOpen && (
        <Portal>
          <DeleteTaskModal />
        </Portal>
      )}
      {isAddBoardOpen && (
        <Portal>
          <AddNewBoardModal />
        </Portal>
      )}
      {isEditBoardOpen && (
        <Portal>
          <EditBoardModal />
        </Portal>
      )}
      {isDeleteBoardOpen && (
        <Portal>
          <DeleteBoardModal />
        </Portal>
      )}
      {isAddColumnOpen && (
        <Portal>
          <AddColumnModal />
        </Portal>
      )}
      {isTaskOpen && (
        <Portal>
          <TaskModal />
        </Portal>
      )}
    </>
  );
}
