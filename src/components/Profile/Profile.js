import './Profile.css';

import Header from "../Header/Header";

import * as MainApi from "../../utils/MainApi";


import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { useState, useEffect } from "react";

import { useFormWithValidation } from "../../hooks/useForm";

function Profile(props) {

  const userInfoData = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const navigate = useNavigate();



  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("filterMovies");
    localStorage.removeItem("formValue");
    localStorage.removeItem("checkboxSwitch");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("submit");

    navigate("/signin");
    props.handleSignOut();
  }


  const [name, setName] = useState(" ");


  function handleChangeName(e) {
    setName(e.target.value);
  }


  const [description, setDescription] = useState(" ");

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }


  useEffect(() => {
    setName(userInfoData.name);
    setDescription(userInfoData.email);
  }, [userInfoData]);


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      email: description,
    });
    props.openInfoTooltip();
    props.setTooltipStatus(true);
    console.log({
      name,
      email: description,
    });
  }


  return (


    <>
      <Header
        loggedIn={props.loggedIn}
        handleOpenNavleaving={props.handleOpenNavleaving} />


      <main className="profile">

        <section className="profile-data">
          <form onSubmit={handleSubmit}>

            <h4 className="profile__heading">Привет, {userInfoData.name}!</h4>

            <div className="profile__wrap">

              <p className="profile__title">Имя</p>
              <input
                id="name"
                name="name"
                type="text"
                className="profile__meaning"
                defaultValue={userInfoData.name}
                onChange={handleChangeName}
                autoComplete="off"
                required
              />
            </div>

            <div className="profile__wrap profile__wrap_border_none">

              <p className="profile__title">E-mail</p>

              <input
                id="email"
                name="email"
                type="email"
                className="profile__meaning"
                defaultValue={userInfoData.email}
                onChange={handleChangeDescription}
                required
              />
            </div>

            <div className="profile-actions">

              <button
                type="submit"
                className="profile-actions__edit"
                disabled={(name === userInfoData.name && description === userInfoData.email) ? true : false}

              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile-actions__edit profile-actions__edit_text_color"
                onClick={signOut}>Выйти из аккаунта</button>

            </div>

          </form>

        </section>

      </main>


    </>
  );
}

export default Profile;