import React from "react";
import { useState } from "react";
import './NavigationProfile.css'
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import icon from "../../../images/header_icon-main.svg";

const NavigationProfile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function toggleBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      {!isOpenMenu ? (
        <button className='nav__button-burger'  onClick={toggleBurgerMenu} />
      ) : (
        <button className='button__burger-closse'  onClick={toggleBurgerMenu} />
      )}
      <BurgerMenu isOpenMenu={isOpenMenu} />
      <div className='nav__menu-profile'>
        <div className="nav__menu-profile-links">

          <NavLink
            className={({ isActive }) => `nav__menu-profile-link ${isActive ? 'active' : ''}`}
            to='/movies'
          >
            Фильмы
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav__menu-profile-link ${isActive ? 'active' : ''}`}
            to='/saved-movies'
          >
            Сохраненные фильмы
          </NavLink>

        </div>
        <Link
          className='nav__menu-profile-account'
          to='/profile'
        >
          <div className='nav__menu-profile-box'>
            <img className='nav__menu-profile-icon' src={icon} alt="Изображение иконки профиля" />
          </div>
          Аккаунт
        </Link>
      </div>
    </>
  )
}

export default NavigationProfile;