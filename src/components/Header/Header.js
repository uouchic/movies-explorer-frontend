import './Header.css';
import React from "react";

import headerLogo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (


    <header className="header">

      {props.loggedIn ? (
        <>
          <div className="header__column">

            <Link to="/" className="header__link"> <img className="header__logo" src={headerLogo} alt="Логотип" /></Link>

            <Navigation />

          </div>

          <Link to="/profile" className="header__prof">Аккаунд</Link>
          <div className="header__avatar"></div>
          <button
            type="button"
            className="header__burger"
            onClick={props.handleOpenNavleaving}

          ></button>
        </>

      ) : (
        <>
          <div className="header__column">

            <Link to="/" className="header__link"> <img className="header__logo" src={headerLogo} alt="Логотип" /></Link>

          </div>


          <Link to="/signup" className="header__reg">Регистрация</Link>
          <Link to="/signin"><button type="button" className="header__log">Войти</button></Link>
        </>
      )}



    </header>


  );
}

export default Header;