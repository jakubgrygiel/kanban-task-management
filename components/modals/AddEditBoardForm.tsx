import styled from "styled-components";
import ModalInput from "./ModalInput";
import { FormEvent } from "react";
import ItemList from "./ItemList";

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
  addColumnMode: boolean;
}

export default function AddEditBoardForm({
  editMode,
  addColumnMode,
}: IAddEditBoardFormProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <StyledWrapper>
      <ModalInput
        id="name-add-new-task"
        name="Name"
        placeholder="e.g. Web Design"
      />
      <ItemList label="Columns" type="Column" />
      <CreateEditBoardBtn onClick={handleClick}>
        {editMode ? "Save changes" : "Create New Board"}
      </CreateEditBoardBtn>
    </StyledWrapper>
  );
}
