import './Movies.css';

import Header from "../Header/Header";

import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import SearchForm from "../SearchForm/SearchForm";

import Footer from "../Footer/Footer";

function Movies(props) {
    return (

        <>

            <Header
            loggedIn={props.loggedIn}
            handleOpenNavleaving={props.handleOpenNavleaving}/>

            <main className="movies">

                <SearchForm checkboxSwitch={props.checkboxSwitch} handleСhangeCheckbox={props.handleСhangeCheckbox} />
                <MoviesCardList />
                <button className="movies-list__btn" type="button">Ещё</button>

            </main>

            <Footer />

        </>

    );
}

export default Movies;
