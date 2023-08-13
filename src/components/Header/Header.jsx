import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className={location.pathname === '/' ? 'header' : 'header header__black'}>
      <Navigation className='nav' />
    </header>
  );
};

export default Header;