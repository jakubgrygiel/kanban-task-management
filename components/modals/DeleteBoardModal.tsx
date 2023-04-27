import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import DeleteForm from "./DeleteForm";

interface IDeleteBoardModalProps {}

export default function DeleteBoardModal() {
  return (
    <ModalWrapper>
      <DeleteForm
        label="Board"
        description="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
      />
    </ModalWrapper>
  );
}
