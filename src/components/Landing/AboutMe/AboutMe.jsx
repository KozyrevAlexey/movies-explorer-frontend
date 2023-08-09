import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section
      className='about' id='about'>
        <h2 className='about__title'>О проекте</h2>
        <ul className='about__info'>
          <li className='about__info-element'>
            <h3 className='about__info-subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='about__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className='about__info-element'>
            <h3 className='about__info-subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='about__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='about__stage'>
          <h4 className='about__stage-stile about__stage-subtitle about__stage-subtitle_modification'>1 неделя</h4>
          <h4 className='about__stage-stile about__stage-subtitle'>4 недели</h4>
          <p className='about__stage-stile about__stage-desc'>Back-end</p>
          <p className='about__stage-stile about__stage-desc'>Front-end</p>
        </div>
    </section>
  );
};

export default AboutMe;