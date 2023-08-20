import React from 'react';
import './BurgerMenu..css';
import { Link, NavLink } from 'react-router-dom';
import icon from "../../../../images/header_icon-main.svg"

const BurgerMenu = ({ isOpenMenu }) => {
  return (
    <section className={`burger-menu ${isOpenMenu ? 'burger-menu_active' : ''}`}>
      <div className={`burger-menu__overlay ${isOpenMenu ? 'burger-menu__overlay_active' : ''}`}></div>
        <div className='burger-menu__wrap'>
          <nav className='burger-menu__nav'>
            <NavLink
              className={({ isActive }) => `burger-menu__link ${isActive ? 'active' : ''}`}
              to='/'
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) => `burger-menu__link ${isActive ? 'active' : ''}`}
              to='/movies'
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) => `burger-menu__link ${isActive ? 'active' : ''}`}
              to='/saved-movies'
            >
              Сохраненные фильмы
            </NavLink>
          </nav>
          <Link
            className='burger-menu__profile'
            to='/profile'
          >
            <div className='burger-menu__profile-wrap'>
              <img className='burger-menu__profile-icon' src={icon} alt="Изображение иконки профиля" />
            </div>
            Аккаунт
          </Link>
        </div>
    </section>
  );
};

export default BurgerMenu;