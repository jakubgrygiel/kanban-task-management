import styled from "styled-components";
import ModalInput from "./ModalInput";
import { FormEvent, useContext } from "react";
import ItemList from "./ItemList";
import { deepCopyObject, setProperty } from "@/utils/helpers";
import { IBoard, initialEmptyColumn } from "@/data/initialData";
import { createId } from "@paralleldrive/cuid2";
import useFormBoard from "@/hooks/form-hooks/useFormBoard";
import { ModalsCtx } from "@/context/ModalsCtx";
import useValidation from "@/hooks/form-hooks/useValidation";

const StyledWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const CreateEditBoardBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 40px;
  width: 100%;
  padding: 0 1.25rem;
  text-align: left;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.buttonPrimaryText};
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBg};
  border: none;
  border-radius: 1.25rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHoverBg};
  }
`;

interface IAddEditBoardFormProps {
  editMode: boolean;
}

export default function AddEditBoardForm({ editMode }: IAddEditBoardFormProps) {
  const { closeModal } = useContext(ModalsCtx);
  const { formData, updateFormData, updateAppData } = useFormBoard(editMode);
  const { hasError: titleHasError, handleBlur: handleTitleBlur } =
    useValidation(formData?.title);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    updateAppData();
    closeModal();
  }

  function updateBoardData(path: string, newValue: string | boolean) {
    let newBoard: IBoard = deepCopyObject(formData);
    newBoard = setProperty(newBoard, path, newValue);
    updateFormData(newBoard);
  }

  function addNewColumn() {
    let newBoard: IBoard = deepCopyObject(formData);
    let newColumn = { ...initialEmptyColumn };
    newColumn.id = createId();
    newBoard.columns.push(newColumn);
    updateFormData(newBoard);
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
  }

  function deleteColumn(columnId: string) {
    let newBoard: IBoard = deepCopyObject(formData);
    let indexOfColumnToDelete = newBoard.columns.findIndex(
      (column) => column.id === columnId
    );
    newBoard.columns.splice(indexOfColumnToDelete, 1);
    updateFormData(newBoard);
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
            hasError={titleHasError}
            updateValue={updateBoardData}
            handleBlur={handleTitleBlur}
          />
          <ItemList
            label="Columns"
            type="Column"
            content={formData.columns}
            addNewItem={addNewColumn}
            updateValue={updateColumn}
            deleteItem={deleteColumn}
          />
          <CreateEditBoardBtn onClick={handleClick}>
            {editMode ? "Save changes" : "Create New Board"}
          </CreateEditBoardBtn>
        </>
      )}
    </StyledWrapper>
  );
}
