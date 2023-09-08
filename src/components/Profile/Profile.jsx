import React from 'react';
import './Profile.css'
import { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation'


const Profile = ({ handleLogaut, handleUsersUpdate }) => {

  const { values, setValues, handleChange, setIsValid, resetForm, errors } = useFormValidation();
  const { email, name } = values;
  const currentUser = useContext(CurrentUserContext);
  // console.log(currentUser.name)

  useEffect(() => {
    resetForm();
    setIsValid({ name: true, email: true });
    // setValues({ name: currentUser.name || '', email: currentUser.email || ''});
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleUsersUpdate(values);
  }

  return (
    <main className='profile'>
      <Header />
      <section className='profile__content'>
        <h1 className='profile__title'>Привет, {currentUser.name}! </h1>

        <form className='profile__form' onSubmit={handleSubmit} >
          <div className='profile__element'>
            <label className='profile__label'>
              <p className='profile__name'>Имя</p>
              <span className={`form__span ${errors.name && 'form__span_error-register'}`}> {errors.name} </span>
              <input
                className='profile__input'
                type='text'
                name='name'
                placeholder='Введите имя'
                value={name || ''}
                // value={values.name}
                onChange={handleChange}
                required
                minLength='2'
                maxLength='23'
              // ref={nameRef}
              />

            </label>

            <label className='profile__label'>
              <p className='profile__name'>E-mail</p>
              <span className={`form__span ${errors.email && 'form__span_error-register'}`}> {errors.email} </span>
              <input
                className='profile__input'
                type='email'
                name='email'
                placeholder='Укажите e-mail'
                value={email || ''}
                onChange={handleChange}
              />

            </label>
          </div>
          <div className='profile__buttons'>
            <button
              className='profile__buttons-submit'
              type='submit'
            >
              Редактировать
            </button>
            <Link
              className='profile__buttons-exit'
              to='/signin'
              onClick={handleLogaut}>Выйти из аккаунта</Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;