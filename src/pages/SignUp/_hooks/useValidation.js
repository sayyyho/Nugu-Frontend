import { useState, useEffect } from "react";
import { SIGN_UP_FIELDS } from "@constants/signUp";

export const useValidation = (page) => {
  const [fieldState, setFieldState] = useState(
    Array.from({ length: SIGN_UP_FIELDS[page - 1].length }, () => false)
  );
  const [allFilled, setAllFilled] = useState(false);
  const [values, setValues] = useState({});

  const validateField = (index, value, fieldName) => {
    const updatedFieldState = [...fieldState];
    updatedFieldState[index] = !!value;
    setFieldState(updatedFieldState);

    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    const areAllFieldsFilled = fieldState.every(Boolean);
    const arePasswordsMatching = values.password === values.password2;

    setAllFilled(areAllFieldsFilled && arePasswordsMatching);
  }, [fieldState, values]);

  const resetValidation = (nextPage) => {
    setFieldState(
      Array.from({ length: SIGN_UP_FIELDS[nextPage - 1].length }, () => false)
    );
    setValues({});
    setAllFilled(false);
  };

  return { fieldState, allFilled, validateField, resetValidation };
};
