import { DataCtx } from "@/context/DataCtx";
import { ModalsCtx } from "@/context/ModalsCtx";
import { getSubtask, updateSubtask } from "@/utils/filterBoard";
import { deepCopyObject } from "@/utils/helpers";
import { FormEvent, useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SubtaskWrapper = styled.label<IChecked>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0.75rem;
  padding-right: 1rem;
  background-color: ${({ theme, isChecked }) =>
    isChecked
      ? theme.colors.checkboxFieldCheckedBg
      : theme.colors.checkboxFieldBg};
  border-radius: 0.25rem;
  transition: background-color 0.3s ease-in-out;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
`;
const Checkbox = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
`;

const CheckboxVisual = styled.div<IChecked>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.checkboxCheckedBg : theme.colors.checkboxBg};
  border: 1px solid
    ${({ theme, isChecked }) =>
      isChecked ? theme.colors.checkboxCheckedBg : theme.colors.checkboxBorder};
  border-radius: 0.125rem;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  img {
    opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
  }
`;

const SubtaskText = styled.span<IChecked>`
  width: 100%;
  text-align: left;
  font-size: 12px;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.checkboxCheckedText : theme.colors.checkboxText};

  transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
`;

interface IChecked {
  isChecked: boolean;
}
interface ISubtaskItemProps {
  id: string;
  text: string;
  isChecked: boolean;
}

export default function SubtaskItem({
  id,
  text,
  isChecked,
}: ISubtaskItemProps) {
  const { data, updateData, activeBoardId } = useContext(DataCtx);
  const {
    currentTaskIds: { columnId, taskId },
  } = useContext(ModalsCtx);

  function changeStatus() {
    let newData = deepCopyObject(data);
    newData = updateSubtask(
      newData,
      activeBoardId,
      columnId,
      taskId,
      id,
      "isCompleted",
      !isChecked
    );
    updateData(newData);
  }

  function handleClick(e: FormEvent) {
    e.preventDefault();
    changeStatus();
  }

  return (
    <StyledWrapper>
      <SubtaskWrapper htmlFor={id} isChecked={isChecked} onClick={handleClick}>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id={id} checked={isChecked} readOnly />
          <CheckboxVisual isChecked={isChecked}>
            <img src="/assets/icon-check.svg" alt="checked icon" />
          </CheckboxVisual>
        </CheckboxWrapper>
        <SubtaskText isChecked={isChecked}>{text}</SubtaskText>
      </SubtaskWrapper>
    </StyledWrapper>
  );
}
