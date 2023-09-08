import React from "react";

import {regexName, } from '../utils/regex';

export function useFormValidation() {
  const formRef = React.useRef(null);
const [values, setValues] = React.useState({
  name: '',
  email: '',
  password: '',
});

const [isValid, setIsValid] = React.useState(false);
const [errors, setErrors] = React.useState({});

const handleChange = (evt) => {
  const { name, value } = evt.target;

  const isName = name ==='name';
  const isNameValid = isName ? regexName.test(value) : true;
  const errorMessage = !isNameValid ? evt.target.validationMessage ||
  'Для написания можно использовать только кирилицу, латиницу, дефис, пробел'
  : evt.target.validationMessage;

  setValues({ ...values, [name]: value});
  setErrors({ ...errors, [name]: errorMessage});
  setIsValid(isNameValid && formRef.current.checkValidity());
};

   const resetForm = React.useCallback(
  (newValues = {}, newErrors = {}, newValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newValid);
  }, [setValues, setErrors, setIsValid],
);

return { formRef, values, setValues, isValid, errors, handleChange, setIsValid, resetForm };
}

// export default useFormValidation;