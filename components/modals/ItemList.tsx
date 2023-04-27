import styled from "styled-components";
import { FormEvent } from "react";
import ItemInput from "./ItemInput";

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
  gap: 12px;
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
}

export default function ItemList({ label, type }: IItemListProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <StyledWrapper>
      <Legend>{label}</Legend>
      <List>
        <ItemInput id="item-1-add-new-task" placeholder="e.g. Make coffee" />
        <ItemInput
          id="item-2-add-new-task"
          placeholder="e.g. Drink coffee & smile"
        />
      </List>
      <AddNewItemBtn onClick={handleClick}>+Add New {type}</AddNewItemBtn>
    </StyledWrapper>
  );
}