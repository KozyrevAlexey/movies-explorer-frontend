import React, { useContext } from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
import NavigationLanding from './NavigationLanding/NavigationLanding';
import NavigationProfile from './NavigationProfile/NavigationProfile';
import logo from './../../images/logo.svg';
import {IsLoggedContext} from './../../contexts/IsLoggedContext'


const Navigation = () => {
  const loggedIn = useContext(IsLoggedContext);

  return (
    <nav className='nav'>
      <Link to='/'>
        <img className='nav__logo' src={logo} alt='Изображение логотипа' />
      </Link>
      {loggedIn ? <NavigationProfile /> : < NavigationLanding />}
    </nav>
  )
}

export default Navigation;