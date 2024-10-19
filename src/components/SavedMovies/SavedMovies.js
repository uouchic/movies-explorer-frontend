import './SavedMovies.css';

import Header from "../Header/Header";


import Preloader from "../Preloader/Preloader";

import MoviesCardList from "../MoviesCardList/MoviesCardList";

import SearchForm from "../SearchForm/SearchForm";

import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (

        <>

            <Header
                loggedIn={props.loggedIn}
                handleOpenNavleaving={props.handleOpenNavleaving} />

            <main className="save-movies">

                <SearchForm checkboxSwitch={props.checkboxSwitch} handleСhangeCheckbox={props.handleСhangeCheckbox} />
                <MoviesCardList />

            </main>

            <Footer />

        </>

    );
}

export default SavedMovies;