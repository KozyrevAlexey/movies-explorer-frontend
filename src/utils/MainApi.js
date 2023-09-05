class MainApi {
  constructor() {
    this._baseUrl = 'http://localhost:3000/';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Упс... Что-то пошло не так! Ошибка: ${res.status}`);
  };

  register({  email, password, name }) {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ email, password, name })
    })
      .then((res) => this._checkResponse(res))
  };

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
      .then((res) => this._checkResponse(res))
  };

  getContent(token) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then((res) => this._checkResponse(res))
      .then(data => data)
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    })
      .then((res) => this._checkResponse(res))
  };

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ name, email })
    })
      .then((res) => this._checkResponse(res))
  };

  saveMovie({ ...data }) {
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ ...data })
    })
      .then((res) => this._checkResponse(res))
  };

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    })
      .then((res) => this._checkResponse(res))
  };

}


export const api = new MainApi()