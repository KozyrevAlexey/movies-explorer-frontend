class MoviesApi {
  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Упс... Во время запроса произошла ошибка: ${res.status}`);
  };

  getMovies() {
    return fetch(this._baseUrl, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => this._checkResponse(res))
  }
}

export const apiMovies = new MoviesApi()