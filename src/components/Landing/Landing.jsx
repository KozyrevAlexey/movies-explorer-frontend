import React from 'react';
import Hero from './Hero/Hero';
import Header from '../Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Student from './Student/Student';
import Techs from './Techs/Techs';

const Landing = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Techs />
      <Student />
    </main>
  );
};

export default Landing;