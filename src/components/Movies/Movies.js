import './Movies.css';

import Header from "../Header/Header";

import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import SearchForm from "../SearchForm/SearchForm";

import Footer from "../Footer/Footer";

function Movies() {
    return (

        <>

        <Header />

        <main className="movies">

            <SearchForm />
            <MoviesCardList />
            <button className="movies-list__btn" type="button">Ещё</button>

        </main>

        <Footer />

        </>

    );
}

export default Movies;
