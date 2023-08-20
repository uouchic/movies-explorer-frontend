import './NavMenu.css';

import { Link } from 'react-router-dom';



function NavMenu(props) {
    return (

        <section className={props.navActive ? "nav-menu active" : "nav-menu"}>

            <button type="button" className="nav-menu__close" onClick={props.closeNav}></button>

            <div className="nav-menu__wrap">

                <Link to="/" className="nav-menu__item">Главная</Link>
                <Link to="/movies" className="nav-menu__item">Фильмы</Link>
                <Link to="/saved-movies" className="nav-menu__item">Сохраненные фильмы</Link>

            </div>

            <div className="nav-menu__row">


                <Link to="/profile" className="nav-menu__prof">Аккаунд</Link>
                <div className="nav-menu__avatar"></div>

            </div>

        </section>


    );
}

export default NavMenu;