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
  const [currentUser,setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [email, setEmail] = useState('')

  const { pathname, search } = useLocation();
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
// }, [navigate]);
}, [loggedIn]);




// function handleLogin(email, password) {
//   api.authorize({email, password})
//   .then((res) => {
//     if(res.token) {
//     localStorage.setItem('jwt', res.token);
//   setLoggedIn(true);
//   handleLoginIn({ email, password })
//     navigate("/movies", {replace: true});
//     // onRegister();
//     }

//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

function handleRegister(name, email, password) {
  api.register({name, email, password })
    .then((res) => {
      navigate("/movies", { replace: true });
      // onRegister();
    })
    .catch(err => {
      // onError();
      console.log(err);
    });
}

function handleLogin(email, password) {
  api.authorize({email, password})
  .then((res) => {
    if(res.token)
    localStorage.setItem('jwt', res.token);
  setLoggedIn(true);
  handleLoginIn({ email, password })
    navigate("/movies", { replace: true });
    // onRegister();
  })
  .catch(err => {
    console.log(`ошибка ${err}`)
  })

}

const handleLoginIn = (user) => {
  setLoggedIn(true);
};

const tokenCheck = () => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    api.getContent(jwt)
    .then((user) => {
      handleLoginIn(user);
      navigate(`${pathname}${search}`, { replace: true})
    })
    .catch((err) => console.log(err));
  }
}
useEffect(() => {
  tokenCheck();
}, [loggedIn]);

function signOut() {
  localStorage.removeItem("jwt");
  setLoggedIn(false);
}

function handleUsersUpdate(user) {
  setIsLoading(true);
  try {
    const update = api.setUserInfo(user);
    setCurrentUser(update.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
}

function handleLogaut() {
  setIsLoading(true);
  try {
    api.logout();
    setLoggedIn(false);
    localStorage.clear()
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
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
              loggedIn={loggedIn}
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute 
                element={Movies}
                textButton='Сахранить'
                loggedIn={loggedIn}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                element={SavedMovies }
                loggedIn={loggedIn}
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
                loggedIn={loggedIn}
                handleLogaut={handleLogaut}
                handleUsersUpdate={handleUsersUpdate}
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
