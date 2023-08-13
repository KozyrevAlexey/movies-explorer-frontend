import React from "react";
import './SearchForm.css';
import CheckBox from "../CheckBox/CheckBox";

const SearchForm = () => {
  return (
    <section className='search__form'>
      <form className='form__search'>
        <input
          className='form__search-input'
          name='search'
          minLength='2'
          maxLength='40'
          type='text'
          placeholder='Фильм'
        />
        <button
          className='form__search-button'
          type='button'
          >
          Поиск
          </button>
      </form>
      <CheckBox />
    </section>
  );
};

export default SearchForm;