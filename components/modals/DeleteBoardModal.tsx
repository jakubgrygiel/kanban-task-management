import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import DeleteForm from "./DeleteForm";
import useBoardCRUD from "@/hooks/crud-hooks/useBoardCRUD";

interface IDeleteBoardModalProps {}

export default function DeleteBoardModal() {
  const { board } = useBoardCRUD();

  return (
    <ModalWrapper>
      {board && (
        <DeleteForm
          label="Board"
          description={`Are you sure you want to delete the "${board.title}" board? This action will remove all columns and tasks and cannot be reversed.`}
        />
      )}
    </ModalWrapper>
  );
}
