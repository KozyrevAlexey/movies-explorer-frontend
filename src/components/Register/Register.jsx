import React from 'react';
import './Register.css'
import Form from '../Form/Form';

const Register = () => {
  return (
    <section className='register'>
      <Form
        title='Добро пожаловать!'
        buttonName='Зарегестрироваться'
        spanText='Уже зарегистрированы?'
        spanPatch='/signin'
        spanLink='Войти'
      >
        <label className='form_label' htmlFor='name'>Имя</label>
        <input className='form__input' id='name' type='text' placeholder='Введите имя' />
        <span className='form__span'>Что-то пошло не так</span>

        <label className='form_label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' type='text' placeholder='Укажите почту' />
        <span className='form__span'> Что-то пошло не так </span>

        <label className='form_label' htmlFor='password'> Пароль </label>
        <input className='form__input form__input-error' id='name' type='password' placeholder='Придумайте пароль' />
        <span className='form__span form__span-error'> Что-то пошло не так </span>
      </Form>
    </section>
  );
};

export default Register;