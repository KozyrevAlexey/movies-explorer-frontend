import React from 'react';
import './Profile.css'
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation} from '../../hooks/useFormValidation'


const Profile = ({ handleLogaut, handleUsersUpdate }) => {

  // const [name, setName] = useState('Виталий');
  // const [email, setEmail] = useState('pochta@yandex.ru')
  const {resetForm, setIsValid, setValues, values, handleChange } = useFormValidation();
  const { name, email } = values;
  const currentUser = useContext(CurrentUserContext);

useEffect(() => {
  resetForm();
  setIsValid({ name: true, email: true });
  setValues({ name: currentUser.name || '', email: currentUser.email || ''});
}, [currentUser]);

const handleSubmit = (evt) => {
  evt.preventDefault();

  handleUsersUpdate(values);
}

  return (
    <main className='profile'>
      <Header />
      <section className='profile__content'>
        <h1 className='profile__title'>{`Привет, ${name}`}!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__element'>
            <label className='profile__label'>
              <p className='profile__name'>Имя</p>
              <input
                className='profile__input'
                type='text'
                placeholder='Введите имя'
                value={name || ''}
                onChange={handleChange}
              />
            </label>
            <label className='profile__label'>
              <p className='profile__name'>E-mail</p>
              <input
                className='profile__input'
                type='text'
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