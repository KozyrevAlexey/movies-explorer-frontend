import React from "react";
import './MoviesCardList.css';
import MovieCard from "../MovieCard/MovieCard";
import { startCards, saveCards } from "../../../utils/constants";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ textButton }) => {
  const location = useLocation();
  return (
    <section className='movies__container'>

      {location.pathname === '/movies' || location.pathname == '/movies' ? (
        <>
          <ul className='movies__list'>
            {startCards.slice().map((movie, i) => (
              <MovieCard
                movie={movie}
                textButton={textButton}
              />
            ))}
          </ul>
        </>
      ) : (
        <ul className='movies__list'>
          {saveCards.slice().map((movie, i) => (
            <MovieCard
              movie={movie}
              textButton={textButton}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default MoviesCardList;
