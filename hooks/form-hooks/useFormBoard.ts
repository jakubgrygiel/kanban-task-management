import { IBoard, UpdateEnum, initialEmptyBoard } from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { createId } from "@paralleldrive/cuid2";
import { useEffect, useState } from "react";
import useBoardCRUD from "../crud-hooks/useBoardCRUD";
import useValidation from "./useValidation";
import useItemsValidation from "./useItemsValidation";

export default function useFormBoard(editMode: boolean) {
  const [formData, setFormData] = useState<IBoard>();
  const { board, updateBoardContent } = useBoardCRUD();

  const {
    handleBlur: handleBlurTitle,
    hasError,
    isValid: titleIsValid,
  } = useValidation(formData?.title);
  const {
    isValid: itemsAreValid,
    itemsValidation,
    handleBlur: handleBlurItems,
    getValidationData,
    updateValidationState,
  } = useItemsValidation();

  useEffect(() => {
    getBoardData();
  }, [board]);

  function getBoardData() {
    if (editMode && board) {
      setFormData(board);
      getValidationData(board.columns);
    } else {
      setInitialBoardData();
    }
  }

  function setInitialBoardData() {
    const newBoard: IBoard = deepCopyObject(initialEmptyBoard);
    newBoard.id = createId();
    newBoard.columns.forEach((column) => {
      column.id = createId();
    });
    setFormData(newBoard);
    getValidationData(newBoard.columns);
  }

  function updateFormData(newData: IBoard) {
    setFormData(newData);
  }

  function updateAppData() {
    if (editMode) {
      updateBoardContent(UpdateEnum.UPDATE, formData);
      return;
    }
    updateBoardContent(UpdateEnum.ADD, formData);
  }

  const handleBlur = {
    title: handleBlurTitle,
    items: handleBlurItems,
  };

  const validation = {
    title: hasError,
    items: itemsValidation,
  };

  const formIsValid = titleIsValid && itemsAreValid;

  return {
    formIsValid,
    formData,
    updateFormData,
    updateAppData,
    validation,
    updateValidationState,
    handleBlur,
  };
}
