import './NavMenu.css';

import { Link } from 'react-router-dom';

function NavMenu(props) {
    return (

        <section className={props.navleaving ? "nav-menu active" : "nav-menu"}>

            <button type="button" className="nav-menu__close" onClick={props.handleCloseNavleaving}></button>

            <div className="nav-menu__wrap">

                <Link to="/" className="nav-menu__item" onClick={props.handleCloseNavleaving}>Главная</Link>
                <Link to="/movies" className="nav-menu__item" onClick={props.handleCloseNavleaving}>Фильмы</Link>
                <Link to="/saved-movies" className="nav-menu__item" onClick={props.handleCloseNavleaving}>Сохраненные фильмы</Link>

            </div>

            <div className="nav-menu__row">

                <Link to="/profile" className="nav-menu__prof" onClick={props.handleCloseNavleaving}>Аккаунд</Link>
                <div className="nav-menu__avatar"></div>

            </div>

        </section>

    );
}

export default NavMenu;