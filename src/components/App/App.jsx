import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Landing from '../Landing/Landing';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';

function App() {
  const [currentUser,setCurrentUser] =useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  // const [email, setEmail] = useState('')

  const { pathname } = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  if (loggedIn) {
    api.getUserInfo().then((res) => 
    setCurrentUser({
      email: res.email,
      name: res.name,
    }),
    );
  }
}, [loggedIn]);

useEffect(() => {
  // if (localStorage.getItem('jwt'))
  if (loggedIn)
  {
    const jwt = localStorage.getItem('jwt');
    api.getContent(jwt) 
    .then((res) => {
      setLoggedIn(true);
      // setEmail(res.email);
      navigate("/", {replace: true})
    })
    .catch(err =>console.log(err))
  }
}, [navigate]);



function handleLogin(password, email) {
  api.authorize({ password, email})
  .then(() => {
    navigate("/signin", {replace: true});
    // onRegister();
  })
  .catch(err => {
    console.log(err)
  })
}

function handleRegister(name, password, email) {
  api.register({name, password, email })
    .then(() => {
      navigate("/movies", { replace: true });
      // onRegister();
    })
    .catch(err => {
      // onError();
      console.log(err);
    });
}

function signOut() {
  localStorage.removeItem("jwt");
  setLoggedIn(false);
}


  const footerSection =
    pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <>
          <Routes>
            <Route
              path='/'
              element={<Landing />}
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute 
                element={Movies}
                textButton='Сахранить'
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                element={SavedMovies }
                textButton='x'
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                element={Profile}
                onSignOut={signOut}
                />
                }
            />
            <Route
              path='/signup'
              element={<Register
              onRegister={handleRegister} />}
            />
            <Route
              path='/signin'
              element={<Login 
                onLogin={handleLogin}
              />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </>
        {footerSection && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
