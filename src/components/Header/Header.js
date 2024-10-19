import './Header.css';
import React from "react";

import headerLogo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (


    <header className={props.bacgroundHeader ? "header header_location_main" : "header "}>

      {props.loggedIn ? (
        <>
          <div className="header-column">

            <Link to="/" className="header-link"> <img className="header-link__logo" src={headerLogo} alt="Логотип" /></Link>

            <Navigation />

          </div>

          <Link to="/profile" className="header__wrap">

          <div to="/profile" className="header__prof">Аккаунт</div>
          <div className={props.bacgroundHeader ? "header__avatar header__avatar_location_main" : "header__avatar"}></div>
          </Link>

          <button
            type="button"
            className="header__burger"
            onClick={props.handleOpenNavleaving}

          ></button>
        </>

      ) : (
        <>
          <div className="header-column">

            <Link to="/" className="header-link"> <img className="header-link__logo" src={headerLogo} alt="Логотип" /></Link>

          </div>


          <Link to="/signup" className="header__reg">Регистрация</Link>
          <Link to="/signin"><button type="button" className="header__log">Войти</button></Link>
        </>
      )}



    </header>


  );
}

export default Header;