import React from "react";
import { Link } from "react-router-dom";
import './NavigationLanding.css';

const NavigationLanding = () => {
  return (
    <div className='nav__landing'>
      <div className='nav__landing-links'>
        <Link
        className='nav__link nav__landing-reg'
        to='/signup'
        tabIndex={1}
        >
        Регистрация
        </Link>
        <Link
        className='nav__link nav__landing-enter'
        to='/signup'
        tabIndex={1}
        >
        Регистрация
        </Link>
      </div>
    </div>
  );
};

export default NavigationLanding;