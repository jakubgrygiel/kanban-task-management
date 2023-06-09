import styled from "styled-components";
import { FormEvent } from "react";
import ItemInput from "./ItemInput";
import { IColumn, ISubtask } from "@/data/initialData";
import { IItemsValidation } from "@/hooks/form-hooks/useItemsValidation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const StyledWrapper = styled.fieldset`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  border: none;
`;

const Legend = styled.legend`
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

const AddNewItemBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 40px;
  width: 100%;
  padding: 0 1.25rem;
  text-align: left;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.buttonSecondaryText};
  background-color: ${({ theme }) => theme.colors.buttonSecondaryBg};
  border: none;
  border-radius: 1.25rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonSecondaryHoverBg};
  }
`;

interface IItemListProps {
  label: string;
  type: string;
  content: ISubtask[] | IColumn[];
  addNewItem: () => void;
  updateValue: (itemId: string, newValue: string) => void;
  deleteItem: (itemId: string) => void;
  validation: IItemsValidation[] | undefined;
  handleBlur: (itemId: string) => void;
}

export default function ItemList({
  label,
  type,
  content,
  addNewItem,
  updateValue,
  deleteItem,
  validation,
  handleBlur,
}: IItemListProps) {
  const [animationParent] = useAutoAnimate();

  function handleClick(e: FormEvent) {
    e.preventDefault();
    addNewItem();
  }

  function renderItems() {
    return content.map((item) => {
      const itemValidData = validation?.find(
        (itemValid) => itemValid.id === item.id
      );

      return (
        <ItemInput
          key={item.id}
          itemId={item.id}
          placeholder="e.g. Drink coffee & smile"
          value={item.title}
          hasError={itemValidData!.hasError}
          updateItem={updateValue}
          deleteItem={deleteItem}
          handleBlur={handleBlur}
        />
      );
    });
  }

  return (
    <StyledWrapper>
      <Legend>{label}</Legend>
      <List ref={animationParent}>{renderItems()}</List>
      <AddNewItemBtn onClick={handleClick}>+Add New {type}</AddNewItemBtn>
    </StyledWrapper>
  );
}
