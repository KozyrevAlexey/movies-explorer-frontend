import React from 'react';
import './Student.css';
import photo from '../../../images/photo.png';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio'

const Student = () => {
  return (
    <section className='student' id='studenr'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__wrap'>
        <div className='student__content'>
          <h3 className='stident__name'>Виталий</h3>
          <p className='student__job'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__intro'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className='student__link'
            to={'https://github.com/KozyrevAlexey'}
            target='_blank'
            rel='noreferrer'
          >
            Github
          </Link>
        </div>
        <img
          className='student__photo'
          src={photo}
          alt='фотография студента'
        />
      </div>
      <Portfolio />
    </section>
  );
};

export default Student;