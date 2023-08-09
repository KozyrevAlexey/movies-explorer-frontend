import React from 'react';
import './NavButton.css';
import { Link } from 'react-scroll';

const NavButton = () => {
  return (
    <nav className='nav-button'>
      <ul className='nav-button__links'>
        <li className=''>
          <Link 
          className='nav-button__link'
          to='about'
          smooth={true}
          duration={300}
          >
          О проекте
          </Link>
        </li>
        <li className=''>
          <Link 
          className='nav-button__link'
          to='tech'
          smooth={true}
          duration={300}
          >
          Технологии
          </Link>
        </li>
        <li className=''>
          <Link 
          className='nav-button__link'
          to='student'
          smooth={true}
          duration={300}
          >
          Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavButton;