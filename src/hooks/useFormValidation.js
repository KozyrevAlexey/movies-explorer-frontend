import React from "react";

import { regexName, regexEmail } from '../utils/regex';

const validateDate = (errors, setErrors, name, value, setIsValid) => {
  switch (name) {
    case 'name':
      if (!regexName.test(value)) {
        setErrors({ ...errors, name: 'Для написания можно использовать только кирилицу, латиницу, дефис, пробел' })
        setIsValid(false)
      } else {
        setErrors({ ...errors, name: '' })
      }
      break;
    case 'email':
      if (name === 'email' && !regexEmail.test(value)) {
        setErrors({ ...errors, email: 'Укажите корректный адрес почты' })
        setIsValid(false)
      } else {
        setErrors({ ...errors, email: '' })
      }
      break;
    default:
      break;
  }
}

export function useFormValidation() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    if (!target.validationMessage) validateDate(errors, setErrors, name, value, setIsValid);
    setIsValid(target.closest('form').checkValidity());
  }

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newValid);
    }, [setValues, setErrors, setIsValid]
  );
  return { values, isValid, errors, handleChange, resetForm, setIsValid, setValues }
}
