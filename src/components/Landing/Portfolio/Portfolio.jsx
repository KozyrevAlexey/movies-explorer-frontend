import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          {/* <p className='portfolio__name'>Статический сайт</p> */}
            <Link 
            className='portfolio__link'
            to={'https://kozyrevalexey.github.io/Learn-to-learn/'}
            target='_blank'
            rel='noreferrer'>
             <p className='portfolio__name'>Статичный сайт</p>
              <span className='portfolio__icon'>↗</span>
            </Link>
        </li>
        <li className='portfolio__item'>
          {/* <p className='portfolio__name'>Адаптивный сайт</p> */}
            <Link 
            className='portfolio__link'
            to={'https://kozyrevalexey.github.io/russian-travel/index.html'}
            target='_blank'
            rel='noreferrer'>
            <p className='portfolio__name'>Адаптивный сайт</p>
              <span className='portfolio__icon'>↗</span>
            </Link>
        </li>
        <li className='portfolio__item'>
          {/* <p className='portfolio__name'>Одностраничное приложение</p> */}
            <Link 
            className='portfolio__link'
            to={'https://kozyrevalexey.github.io/mesto/'}
            target='_blank'
            rel='noreferrer'>
                    <p className='portfolio__name'>Одностраничное приложение</p>
              <span className='portfolio__icon'>↗</span>
            </Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;