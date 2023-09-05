import React from 'react';
import './Login.css'
import Form from '../Form/Form';
import {useFormValidation} from '../../hooks/useFormValidation';


const Login = ({onLogin}) => {
  const { formRef, values, isValid, errors, handleChange } = useFormValidation();

const handleSubmit = (evt) => {
  evt.preventDefault();

  onLogin(values);
}
  return (
    <section className='login'>
      <Form
        title='Рады видеть!'
        buttonName='Войти'
        spanText='Еще не зарегистрированы?'
        spanPatch='/signup'
        spanLink='Регистрация'
        formRef={formRef}
        isValid={isValid}
        onSubmit={handleSubmit}
      >

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
        {/* <span className='form__span'> Что-то пошло не так </span> */}

        <label className='form__label' htmlFor='password'> Пароль </label>
        <input 
                className={`form__input  ${errors.password && 'form__input-error'}`} 
        id='password' 
        name='password' 
        type='password' 
        placeholder='Укажите пароль' 
        required 
        minLength='2' 
        maxLength='10' 
        value={values.password} 
        onChange={handleChange} />
        <span className={`form__span form__span_error-login ${errors.password && 'form__span_error-register'}`}> Что-то пошло не так </span>
      </Form>
    </section>
  );
};

export default Login;