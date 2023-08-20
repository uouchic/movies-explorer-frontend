import React from 'react';

import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';


import './App.css';

/* import Header from "../Header/Header"; */

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import NavMenu from "../NavMenu/NavMenu";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  const [navActive, setNavActive] = useState(false);

  function openNav() {
    setNavActive(true);
  }

  function closeNav() {
    setNavActive(false);
  }

  return (

    <div className="page">



      <Routes>


        <Route path="/" element={<Main loggedIn={loggedIn} openNav={openNav} />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/signup" element={<Register />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />


      </Routes>

      <NavMenu navActive={navActive} closeNav={closeNav} />

    </div>

  );
}

export default App;
