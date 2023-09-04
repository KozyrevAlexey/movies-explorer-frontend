import React from 'react';
import './Register.css'
import Form from '../Form/Form';
import {useFormValidation} from '../../hooks/useFormValidation';

const Register = ({onRegister}) => {
const { formRef, values, isValid, errors, handleChange } = useFormValidation();

const handleSubmit = (evt) => {
  evt.preventDefault();

  onRegister(values);
}

  return (
    <main className='register'>
      <Form
        title='Добро пожаловать!'
        buttonName='Зарегестрироваться'
        spanText='Уже зарегистрированы?'
        spanPatch='/signin'
        spanLink='Войти'
        formRef={formRef}
        isValid={isValid}
        onSubmit={handleSubmit}
      >
        <label className='form__label' htmlFor='name'>Имя</label>
        <input 
        className={`form__input ${errors.name && 'form__input-error'}`} 
        id='name' 
        name='name'
        type='text' 
        placeholder='Введите имя' 
        required 
        minLength='2' 
        maxLength='40' 
        value={values.name} 
        onChange={handleChange} />
        <span 
        className={`form__span ${errors.name && 'form__span_error-register'}`}
        >
        Укажите корректное имя
        </span>

        <label className='form__label' htmlFor='email'>E-mail</label>
        <input 
        className={`form__input ${errors.email && 'form__input-error'}`} 
        id='email' 
        name='email' 
        type='email' 
        placeholder='Укажите почту' 
        required 
        value={values.email} 
        onChange={handleChange} />
        <span className={`form__span ${errors.email && 'form__span_error-register'}`}> Укажите корректный email </span>

        <label className='form__label' htmlFor='password'> Пароль </label>
        <input 
        className={`form__input ${errors.password && 'form__input-error'}`} 
        id='password' 
        name='password' 
        type='password' 
        placeholder='Придумайте пароль' 
        required 
        minLength='2' 
        maxLength='10' 
        value={values.password} 
        onChange={handleChange} />
        <span className={`form__span ${errors.password && 'form__span_error-register'}`}> Что-то пошло не так </span>
      </Form>
    </main>
  );
};

export default Register;

