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

  const [loggedIn, setLoggedIn] = useState(true);


  const [navleaving, setNavleaving] = useState(false);

  

  function handleOpenNavleaving() {
    setNavleaving(true);
  }

  function handleCloseNavleaving() {
    setNavleaving(false);
  }


  const [checkboxSwitch, setCheckboxSwitch] = useState(false);

  function handleСhangeCheckbox() {
    setCheckboxSwitch(!checkboxSwitch);
  }
  

  return (

    <div className="page">


      <Routes>

        <Route path="/" element={<Main loggedIn={loggedIn} handleOpenNavleaving={handleOpenNavleaving} />} />

        <Route path="/movies" element={<Movies loggedIn={loggedIn} handleOpenNavleaving={handleOpenNavleaving} checkboxSwitch={checkboxSwitch} handleСhangeCheckbox={handleСhangeCheckbox}/>} />

        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} handleOpenNavleaving={handleOpenNavleaving} checkboxSwitch={checkboxSwitch} handleСhangeCheckbox={handleСhangeCheckbox} />} />

        <Route path="/signup" element={<Register />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/profile" element={<Profile loggedIn={loggedIn} handleOpenNavleaving={handleOpenNavleaving} />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <NavMenu navleaving={navleaving} handleCloseNavleaving={handleCloseNavleaving} />

    </div>

  );
}

export default App;
