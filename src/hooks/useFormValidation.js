import React from "react";

import {regexName, regexEmail } from '../utils/regex';

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

// const validateData = (name, errors, setErrors, setIsValid, value) => {
//   switch (name) {
//     case 'name': 
//     if (!regexName.test(value)) {
//       setErrors({ ...errors, name: 'Для написания можно использовать только кирилицу, латиницу, дефис, пробел' })
//       setIsValid(false)
//     } else {
//       setErrors({ ...errors, name: ''})
//     }
//     break;
//     case 'email':
//       if ( name === 'email' && !regexEmail.test(value)) {
//         setErrors({ ...errors, email: 'Укажите верный адрес почты' })
//       setIsValid(false)
//       } else {
//         setErrors({ ...errors, email: ''})
//       }
//       break;
//       default:
//         break;
//   }
// }

// export function useFormValidation(initialValue) {
//   // const formRef = React.useRef(null);

//   const [values, setValues] = React.useState(ini);
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);

//   const handleChange = (evt) => {
//     const target = evt.target
//     const name = target.name;
//     const value = target.value;
//     setValues({ ...values, [name]: value});
//     setErrors({ ...errors, [name]: target.validationMessage});
//     if (!target.validationMessage) validateData(name, errors, setErrors, setIsValid, value);
//     setIsValid(target.closest('form').checkValidity())
//   }
//   const resetForm = React.useCallback(
//       (newValues = initialValue, newErrors = {}, newValid = false) => {
//         setValues(newValues);
//         setErrors(newErrors);
//         setIsValid(newValid);
//       }, [setValues, setErrors, setIsValid],
//     );
    
//     return { formRef, values, setValues, isValid, errors, handleChange, setIsValid, resetForm };
// }




// export default useFormValidation;