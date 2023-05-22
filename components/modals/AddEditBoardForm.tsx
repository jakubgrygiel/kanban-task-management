import styled from "styled-components";
import ModalInput from "./ModalInput";
import { FormEvent, useContext } from "react";
import ItemList from "./ItemList";
import { deepCopyObject, setProperty } from "@/utils/helpers";
import { IBoard, UpdateEnum, initialEmptyColumn } from "@/data/initialData";
import { createId } from "@paralleldrive/cuid2";
import useFormBoard from "@/hooks/form-hooks/useFormBoard";
import { ModalsCtx } from "@/context/ModalsCtx";
import CreateBtn from "./CreateBtn";
import CancelBtn from "./CancelBtn";

const StyledWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

interface IAddEditBoardFormProps {
  editMode: boolean;
}

export default function AddEditBoardForm({ editMode }: IAddEditBoardFormProps) {
  const { closeModal } = useContext(ModalsCtx);
  const {
    formIsValid,
    formData,
    updateFormData,
    updateAppData,
    validation,
    updateValidationState,
    handleBlur,
  } = useFormBoard(editMode);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    updateAppData();
    closeModal();
  }

  function updateBoardData(id: string, newValue: string | boolean) {
    let newBoard: IBoard = deepCopyObject(formData);
    newBoard = setProperty(newBoard, id, newValue);
    updateFormData(newBoard);
  }

  function addNewColumn() {
    let newBoard: IBoard = deepCopyObject(formData);
    let newColumn = { ...initialEmptyColumn };
    newColumn.id = createId();
    newBoard.columns.push(newColumn);
    updateFormData(newBoard);
    updateValidationState(UpdateEnum.ADD, newColumn.id);
  }

  function updateColumn(columnId: string, newValue: string) {
    let newBoard: IBoard = deepCopyObject(formData);
    let indexOfColumnToUpdate = newBoard.columns.findIndex(
      (column) => column.id === columnId
    );
    newBoard.columns[indexOfColumnToUpdate] = setProperty(
      newBoard.columns[indexOfColumnToUpdate],
      "title",
      newValue
    );
    updateFormData(newBoard);
    updateValidationState(UpdateEnum.UPDATE, columnId, newValue);
  }

  function deleteColumn(columnId: string) {
    let newBoard: IBoard = deepCopyObject(formData);
    let indexOfColumnToDelete = newBoard.columns.findIndex(
      (column) => column.id === columnId
    );
    newBoard.columns.splice(indexOfColumnToDelete, 1);
    updateFormData(newBoard);
    updateValidationState(UpdateEnum.DELETE, columnId);
  }

  return (
    <StyledWrapper>
      {formData && (
        <>
          <ModalInput
            id="title"
            name="Name"
            placeholder="e.g. Web Design"
            value={formData.title}
            hasError={validation.title}
            updateValue={updateBoardData}
            handleBlur={handleBlur.title}
          />
          <ItemList
            label="Columns"
            type="Column"
            content={formData.columns}
            addNewItem={addNewColumn}
            updateValue={updateColumn}
            deleteItem={deleteColumn}
            validation={validation.items}
            handleBlur={handleBlur.items}
          />
          <CreateBtn disabled={!formIsValid} handleClick={handleClick}>
            {editMode ? "Save changes" : "Create New Board"}
          </CreateBtn>
          <CancelBtn mobile={true} />
        </>
      )}
    </StyledWrapper>
  );
}
