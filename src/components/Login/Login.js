import './Login.css';
import headerLogo from "../../images/logo.svg";

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";

import { useFormWithValidation } from "../../hooks/useForm";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import * as MainApi from "../../utils/MainApi";

function Login(props) {

    const currentUser = useContext(CurrentUserContext);


    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        MainApi
            .authorize(values.email, values.password)
            .then((data) => {
                localStorage.setItem("jwt", data.token);
                props.handleLogin();
                props.openInfoTooltip();
                props.setTooltipStatus(true);
                navigate("/movies");
            })
            .catch((err) => {
                console.log(err);
                props.openInfoTooltip();
                props.setTooltipStatus(false);
            });
    };

    return (
        <main className="register">
            <section className="user-data">

                <Link to="/" className="header-link"> <img className="header-link__logo" src={headerLogo} alt="Логотип" /></Link>

                <h3 className="user-data__title">Рады видеть!</h3>
                <form className="user-data__form">

                    <h4 className="user-data__heading">E-mail</h4>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="user-data__item"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Введите E-mail"
                        autoComplete="off"
                        required
                    ></input>

                    <span className="user-data__err-message">{errors.email}</span>

                    <h4 className="user-data__heading">Пароль</h4>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="user-data__item"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Введите пароль"
                        required
                    ></input>

                    <span className="user-data__err-message">{errors.password}</span>

                    <button
                        className="user-data__save user-data__save_location_reg"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!isValid}
                    >
                        Войти
                    </button>
                </form>

                <Link to="/signup" className="user-data__link">
                    Еще не зарегистрированны? <span className="user-data__in-color">Регистрация</span>
                </Link>
            </section>
        </main>
    );
}

export default Login;