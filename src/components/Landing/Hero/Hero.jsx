import React from 'react';
import './Hero.css';
import NavButton from '../NavButton/NavButton';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <h1 className='hero__title'>
        Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavButton />
      </div>
    </section>
  );
};

export default Hero;