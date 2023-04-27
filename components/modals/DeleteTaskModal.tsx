import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import DeleteForm from "./DeleteForm";

interface IDeleteTaskModalProps {}

export default function DeleteTaskModal() {
  return (
    <ModalWrapper>
      <DeleteForm
        label="Task"
        description="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
      />
    </ModalWrapper>
  );
}
