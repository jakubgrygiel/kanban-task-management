import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import DeleteForm from "./DeleteForm";
import { ModalsCtx } from "@/context/ModalsCtx";
import { DataCtx } from "@/context/DataCtx";
import { useContext } from "react";
import { getBoard } from "@/utils/crud";
import { IBoard } from "@/data/initialData";

interface IDeleteBoardModalProps {}

export default function DeleteBoardModal() {
  const { data, activeBoardId } = useContext(DataCtx);
  let board: IBoard | undefined;
  if (data) {
    board = getBoard(data, activeBoardId);
  }

  return (
    <ModalWrapper>
      {data && board && (
        <DeleteForm
          label="Board"
          description={`Are you sure you want to delete the "${board.title}" board? This action will remove all columns and tasks and cannot be reversed.`}
        />
      )}
    </ModalWrapper>
  );
}
