import './Register.css';
import headerLogo from "../../images/logo.svg";

import { Link } from 'react-router-dom';

function Register() {
    return (
        <main className="register">
            <section className="user-data">

            <Link to="/" className="header__link"> <img className="header__logo" src={headerLogo} alt="Логотип" /></Link>
            
                <h3 className="user-data__title">Добро пожаловать</h3>
                <form className="user-data__form">

                    <h4 className="user-data__heading">Имя</h4>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="user-data__item"
                        minLength="2"
                        maxLength="40"
                        required
                    ></input>

                    <span className="user-data__err-message"></span>

                    <h4 className="user-data__heading">E-mail</h4>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="user-data__item"
                        required
                    ></input>

                    <span className="user-data__err-message"></span>

                    <h4 className="user-data__heading">Пароль</h4>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="user-data__item"
                        required
                    ></input>

                     <span className="user-data__err-message">Что-то пошло не так...</span>

                    <button
                        className="user-data__save"
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>
                </form>

                <Link to="/signin" className="user-data__link">
                    Уже зарегистрированны? <span className="user-data__in-color">Войти</span>
                </Link>
            </section>
        </main>
    );
}

export default Register;