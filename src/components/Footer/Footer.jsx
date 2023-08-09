import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__wrapper'>
        <span className='footer__span'>&#169; {new Date().getFullYear()}</span>
        <ul className='footer__links'>
          <li className='footer__links-element'>
            <Link
              className='footer__link'
              to='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className='footer__links-element'>
            <Link
              className='footer__link'
              to='https://github.com/KozyrevAlexey'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;