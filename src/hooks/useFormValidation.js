import React from "react";

import {regex} from '../utils/regex';

export function useFormValidation() {
  const formRef = React.useRef(null);
const [values, setValues] = React.useState({
  name: '',
  email: '',
  password: '',
});

const [isValid, setValid] = React.useState(false);
const [errors, setErrors] = React.useState({});

const handleChange = (evt) => {
  const { name, value } = evt.target;

  const isName = name ==='name';
  const isNameValid = isName ? regex.test(value) : true;
  const errorMessage = !isNameValid ? evt.target.validationMessage ||
  'Для написания можно использовать только кирилицу, латиницу, дефис, пробел'
  : evt.target.validationMessage;

  setValues({ ...values, [name]: value});
  setErrors({ ...errors, [name]: errorMessage});
  setValid(isNameValid && formRef.current.checkValidity());
};

const resetForm = React.useCallback(
  (newValues = {}, newErrors = {}, newValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setValid(newValid);
  }, [setValues, setErrors, setValid],
);

return { formRef, values, setValues, isValid, errors, handleChange, setValid, resetForm };
}

// export default useFormValidation;