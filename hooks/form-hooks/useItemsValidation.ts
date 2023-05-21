import { IColumn, ISubtask, UpdateEnum, UpdateType } from "@/data/initialData";
import { deepCopyObject } from "@/utils/helpers";
import { useState } from "react";

export interface IItemsValidation {
  id: string;
  hasError: boolean;
  isValid: boolean;
  isTouched: boolean;
}

export default function useItemsValidation() {
  const [itemsValidation, setItemsValidation] = useState<
    IItemsValidation[] | undefined
  >();

  const isValid = checkIfItemsAreValid();

  function checkIfItemsAreValid() {
    let isValid = true;
    if (itemsValidation === undefined) return isValid;
    itemsValidation.forEach((item) => {
      if (!item.isValid) {
        isValid = false;
      }
    });
    return isValid;
  }

  function getValidationData(items: IColumn[] | ISubtask[]) {
    const newItemsValidation: IItemsValidation[] = items.map((item) => {
      if (item.title === "") {
        return {
          id: item.id,
          hasError: false,
          isValid: false,
          isTouched: false,
        };
      }
      return {
        id: item.id,
        hasError: false,
        isValid: true,
        isTouched: true,
      };
    });
    setItemsValidation(newItemsValidation);
  }

  function handleBlur(id: string) {
    const newItemsValidation: IItemsValidation[] =
      deepCopyObject(itemsValidation);
    const itemIdx = newItemsValidation.findIndex((item) => item.id === id);
    newItemsValidation[itemIdx].isTouched = true;
    const hasError =
      !newItemsValidation[itemIdx].isValid &&
      newItemsValidation[itemIdx].isTouched;
    newItemsValidation[itemIdx] = {
      ...newItemsValidation[itemIdx],
      hasError: hasError,
    };
    setItemsValidation(newItemsValidation);
  }

  function updateValidation(id: string, value: string) {
    const newItemsValidation: IItemsValidation[] =
      deepCopyObject(itemsValidation);
    const itemIdx = newItemsValidation.findIndex((item) => item.id === id);
    const isValid = validateValue(value);
    const hasError = !isValid && newItemsValidation[itemIdx].isTouched;
    newItemsValidation[itemIdx] = {
      ...newItemsValidation[itemIdx],
      hasError: hasError,
      isValid: isValid,
    };
    setItemsValidation(newItemsValidation);
  }

  function addItemToValidation(id: string) {
    const newItemsValidation: IItemsValidation[] =
      deepCopyObject(itemsValidation);
    newItemsValidation.push({
      id: id,
      hasError: false,
      isValid: false,
      isTouched: false,
    });
    setItemsValidation(newItemsValidation);
  }

  function deleteItemFromValidation(id: string) {
    const newItemsValidation: IItemsValidation[] =
      deepCopyObject(itemsValidation);
    const itemIdx = newItemsValidation.findIndex((item) => item.id === id);
    newItemsValidation.splice(itemIdx, 1);
    setItemsValidation(newItemsValidation);
  }

  function validateValue(inputValue: string | undefined) {
    return inputValue !== "" ? true : false;
  }

  function updateValidationState(
    updateType: UpdateType,
    id: string,
    value?: string
  ) {
    if (id && updateType === UpdateEnum.ADD) {
      addItemToValidation(id);
    }
    if (id && value && updateType === UpdateEnum.UPDATE) {
      updateValidation(id, value);
    }
    if (id && updateType === UpdateEnum.DELETE) {
      deleteItemFromValidation(id);
    }
  }

  return {
    isValid,
    itemsValidation,
    handleBlur,
    getValidationData,
    updateValidationState,
  };
}
