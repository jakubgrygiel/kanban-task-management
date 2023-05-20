import { useState } from "react";

export default function useValidation(inputValue: string | undefined) {
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(inputValue);
  const hasError = !isValid && isTouched;

  function handleBlur() {
    setIsTouched(true);
  }

  function validateValue(inputValue: string | undefined) {
    return inputValue !== "" ? true : false;
  }

  return {
    isValid,
    hasError,
    handleBlur,
  };
}
