import './App.css';

import React from 'react';

import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

import * as movies from "../../utils/MoviesApi";


import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import NavMenu from "../NavMenu/NavMenu";

import * as MainApi from "../../utils/MainApi";


function App() {

  // const [isLoading, setIsLoading] = useState(false);



  // --------------------------------------------------------ДАННЫЕ ПОЛЬЗОВАТЕЛЯ---------------------------------------------------------- //

  // стейт с объектом данных пользователя
  const [currentUser, setCurrentUser] = useState({});



  // -----------------------------------------------стейт залогинился пользователь или нет---------------------------------------------------//

  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    if (loggedIn) {
      MainApi
        .getUserInfo()
        .then((userInfoApi) => {
          setCurrentUser(userInfoApi);
        })
        .catch((err) => console.log(err));

      console.log(currentUser)
    }
  }, [loggedIn]);







  // ---------------------------------------------------------------логирование пользователя---------------------------------------------------//

  const handleLogin = () => {
    setLoggedIn(true);
    /* console.log({name, email}); */
    /* setCurrentUser({name, email}); */
  };


  // -------------------------------------------------------------разлогирование пользователя--------------------------------------------------//

  const handleSignOut = () => {
    setLoggedIn(false);
  };


  // данные текущего пользователя



  const handleUser = (name, email) => {


  };






  // ---------------------------------------------------------------------- стейт выесжающее меню---------------------------------------------------------//

  const [navleaving, setNavleaving] = useState(false);

  //----------------------------------------------------------------функция открывания выесжающего меню----------------------------------------------------//

  function handleOpenNavleaving() {
    setNavleaving(true);
  }

  // -----------------------------------------------------------------функция закрытия выесжающего меню----------------------------------------------------//

  function handleCloseNavleaving() {
    setNavleaving(false);
  }


  // ----------------------------------------------------------------------стейт состояние чекбокса-----------------------------------------------------------//

  const [checkboxSwitch, setCheckboxSwitch] = useState(false);

  // -------------------------------------------------------------------функция изменения состояния чекокса---------------------------------------------------//

  function handleСhangeCheckbox() {
    setCheckboxSwitch(!checkboxSwitch);

  }

  // -----------------------------------------------------------------------стейт состояние фона шапки--------------------------------------------------------//

  const [bacgroundHeader, setBacgroundHeader] = useState(true);


  // -----------------------------------------------------------------------переменная переадресации-----------------------------------------------------------//

  const navigate = useNavigate();

  // -----------------------------------------------функция проверки наличия токена возврата данных текущего пользователя--------------------------------------//

  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            navigate("/movies");
            handleUser(data.name, data.email);
          } else {
            setLoggedIn(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // -----------------------------------------------------------эффект при загрузке страницы проверки наличия токена------------------------------------------------//

  useEffect(() => {
    checkToken();
  }, []);








  //  ------------------------------------------------------------------------- СТЕЙТЫ ПОПАПОВ---------------------------------------------------------------------//



  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  function openInfoTooltip() {
    setIsInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setIsInfoTooltipOpen(null);
  }


  const [isSuccessTooltipStatus, setIsSuccessTooltipStatus] = useState(null);

  function setTooltipStatus(bool) {
    setIsSuccessTooltipStatus(bool);
  }





  // -----------------------------------------------------------------------------ВСЕ ФИЛЬМЫ ИЗ АПИ---------------------------------------------------------//


  // -------------------------------------------------------------стейт хранения всех фильмов полученых из API----------------------------------------------//
  // const [allMovies, setAllMovies] = useState([]);


  // эфект делающий запрос к API при загрухки страницы и созраняющий все фильмы в стейт

  // useEffect(() => {
  //   setIsLoading(true);
  //   movies.getMovies()
  //     .then((data) => {
  //       console.log(data);
  //       setAllMovies(data);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false))
  // }, []);


  function handleAllMovies () {
    // setIsLoading(true);
    // movies.getMovies()
    //   .then((data) => {
    //     console.log(data);
    //     setAllMovies(data);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => setIsLoading(false))
  };


  // ----------------------------------------------------------------------- СОХРАНЕННЫЕ ФИЛЬМЫ ИЗ АПИ----------------------------------------------------//


  const [saveMovies, setSaveMovies] = useState([]);

  console.log(saveMovies)



  // ------------------------------------------------------------------------Получить все сохраненные фильмы -----------------------------------------------//



  useEffect(() => {
    if (loggedIn) {
      
      MainApi.getAllMovies()
        .then((data) => {
          setSaveMovies(data);
          console.log(data);
        })
        .catch((err) => console.log(err))
        
    }
  }, [loggedIn]);


  // ------------------------------------------------------------------------------------------------------------------------------------------



  // --------------------------------------------------------------Функция сохранения фильма --------------------------------------------------

  function saveMovie(data) {
    MainApi.addNewMovie({
      country: data.country,
      director: data.director,
      duration: Number(data.duration),
      year: data.year,
      description: data.description,
      image: "https://api.nomoreparties.co" + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail: "https://api.nomoreparties.co" + data.image.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN
    })
      .then((data) => {
       // saveMovies.push(data);

        setSaveMovies([data, ...saveMovies]);

        //setSaveMovies((saveMovies) => saveMovies.map((c) => c._id === card._id ? data : c));


        



      })
      .catch((err) => { console.log(err) })


  };





  // -------------------------------------------------------------------функции удаления фильма --------------------------------
  function delMovie(id) {

    // MainApi.removeMovie(id)
    //   .then((data) => { })
    //   .catch((err) => console.log(err));

    /* console.log("Нажали на сердечко") */
  }


  // const [idMovieDelete, setIdMovieDelete] = useState("")


  function deletesMovie(idMovieDelete) {

    console.log(idMovieDelete);

    const idDelete = saveMovies.filter((m) => m.movieId === idMovieDelete);

    console.log(idDelete[0]._id);

    MainApi.removeMovie(idDelete[0]._id)
      .then((data) => {
        setSaveMovies(() => saveMovies.filter((m) => m._id !== data._id));
      })
      .catch((err) => console.log(err));




  }






  
  function handleUpdateUser(userInfo) {
    MainApi
      .setUserInfo(userInfo)
      .then((userInfoApi) => {
        setCurrentUser(userInfoApi);
        
      })
      .catch((err) => console.log(err));
  }













  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">


        <Routes>

          <Route
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                handleOpenNavleaving={handleOpenNavleaving}
                bacgroundHeader={bacgroundHeader}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <Movies
                loggedIn={loggedIn}
                handleOpenNavleaving={handleOpenNavleaving}
                checkboxSwitch={checkboxSwitch}
                handleСhangeCheckbox={handleСhangeCheckbox}
                handleLogin={handleLogin}
                saveMovie={saveMovie}
                //allMovies={allMovies}

                saveMovies={saveMovies}
                //delMovie={delMovie}
                deletesMovie={deletesMovie}
                //isLoading={isLoading}
                handleAllMovies={handleAllMovies}
                setCheckboxSwitch={setCheckboxSwitch}

              />

            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}

                loggedIn={loggedIn}
                handleOpenNavleaving={handleOpenNavleaving}
                checkboxSwitch={checkboxSwitch}
                handleСhangeCheckbox={handleСhangeCheckbox}
                saveMovie={saveMovie}
                setSaveMovies={setSaveMovies}

                //delMovie={delMovie}
                //allMovies={allMovies}
                saveMovies={saveMovies}
                deletesMovie={deletesMovie}


              />
            }
          />

          <Route path="/profile" element={
            <ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              handleOpenNavleaving={handleOpenNavleaving}
              handleSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
            />
          }
          />

          <Route path="/signup" element={<Register handleLogin={handleLogin} setTooltipStatus={setTooltipStatus} openInfoTooltip={openInfoTooltip} />} />

          <Route path="/signin" element={<Login handleLogin={handleLogin} setTooltipStatus={setTooltipStatus} openInfoTooltip={openInfoTooltip} />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

        <NavMenu navleaving={navleaving} handleCloseNavleaving={handleCloseNavleaving} />

      </div>


      <InfoTooltip
        name="success"
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        isSuccessTooltipStatus={isSuccessTooltipStatus}
      />

    </CurrentUserContext.Provider>




  );
}

export default App;
