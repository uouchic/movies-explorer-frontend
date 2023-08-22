import './Login.css';
import headerLogo from "../../images/logo.svg";

import { Link } from 'react-router-dom';

function Login() {
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
                        placeholder="Введите E-mail"
                        autoComplete="off"
                        required
                    ></input>

                    <span className="user-data__err-message"></span>

                    <h4 className="user-data__heading">Пароль</h4>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="user-data__item"
                        placeholder="Введите пароль"
                        required
                    ></input>

                     <span className="user-data__err-message"></span>

                    <button
                        className="user-data__save user-data__save_location_reg"
                        type="submit"
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