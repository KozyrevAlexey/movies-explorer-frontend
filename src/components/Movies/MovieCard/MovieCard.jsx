import React from "react";
import './MovieCard.css';
// import { useLocation } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ movie, textButton }) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleClickLike = () => {
    setIsLiked(isLiked => !isLiked);
  }

  const likeMovieButton = (
    `movie__button ${isLiked && 'movie__button_like'}`
  );

  return (
    <li className='movie'>
      <div className='movie__description'>
        <h2 className='movie__name'>{movie.name}</h2>
        <p className='movie__time'>{movie.time}</p>
      </div>
      <img
        className='movie__image'
        src={movie.image}
        alt={movie.name}
      />
      <button
        className={likeMovieButton}
        onClick={handleClickLike}
        type='button'>
        {!isLiked ? textButton : null}
      </button>
    </li>

  );
};

export default MovieCard;