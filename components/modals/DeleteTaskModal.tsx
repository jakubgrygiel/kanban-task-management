import ModalWrapper from "./ModalWrapper";
import DeleteForm from "./DeleteForm";
import useTaskCRUD from "@/hooks/crud-hooks/useTaskCRUD";

export default function DeleteTaskModal() {
  const { task } = useTaskCRUD();

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
