import './SavedMovies.css';

import Header from "../Header/Header";


import Preloader from "../Preloader/Preloader";

import MoviesCardList from "../MoviesCardList/MoviesCardList";

import SearchForm from "../SearchForm/SearchForm";

import Footer from "../Footer/Footer";

import * as MainApi from "../../utils/MainApi";

import { useState, useEffect } from "react";

function SavedMovies(props) {

    
    // стейт отобранных фильмов
    const [filterMovies, setFilterMovies] = useState([]);

    const [checkboxSwitch, setCheckboxSwitch] = useState(false);

    function handleСhangeCheckbox() {
        setCheckboxSwitch(!checkboxSwitch);
    
      }


    // стейт значения из формы поиска
    const [formValueMovies, setFormValueMovies] = useState("");
    // console.log(formValueMovies);

    // функция записи в стейт поисковую фразу из формы поиска
    function handleChangeMovies(e) {
        e.preventDefault();
        setFormValueMovies(e.target.value);

    };

    // фунуция фильтрования фильмов в зависимости от поисковой фразы и положения чекбокса короткометражек
    function handleSearchMovies(e) {

        e.preventDefault();
        // eslint-disable-next-line no-lone-blocks

        filteredSaveMovies();

    };


    function filteredSaveMovies () {
        
            checkboxSwitch ?
            setFilterMovies((props.saveMovies.filter(
                    m => m.nameRU.toLowerCase().includes(formValueMovies.toLowerCase())).filter(m => m.duration < 40)
                )) :
                setFilterMovies(props.saveMovies.filter(
                    m => m.nameRU.toLowerCase().includes(formValueMovies.toLowerCase())
                ))        

    }

    useEffect(() => {
        filteredSaveMovies();
    }, [checkboxSwitch]);


 // функция удаления фильма 
 function delMovie (id) {
    MainApi.removeMovie(id)
    .then((data) => {        
        setFilterMovies(() => filterMovies.filter((m) => m._id !== data._id));
        props.setSaveMovies(() => props.saveMovies.filter((m) => m._id !== data._id));
    })
    .catch((err) => console.log(err));
    /* console.log("Нажали на крестик") */
 }


    return (

        <>

            <Header
                loggedIn={props.loggedIn}
                handleOpenNavleaving={props.handleOpenNavleaving} />

            <main className="save-movies">

                <SearchForm
                    checkboxSwitch={checkboxSwitch}
                    handleСhangeCheckbox={handleСhangeCheckbox}
                    setFilterMovies={setFilterMovies}
                    formValueMovies={formValueMovies}
                    handleChangeMovies={handleChangeMovies}
                    handleSearchMovies={handleSearchMovies}
                    saveMovies={props.saveMovies}
                />
                <MoviesCardList
                    filterMovies={filterMovies}
                    setFilterMovies={setFilterMovies}
                    saveMovie={props.saveMovie}
                    boolean={false}
                    delMovie={delMovie}

                    saveMovies={props.saveMovies}
                    deletesMovie={props.deletesMovie}
                />

            </main>

            <Footer />

        </>

    );
}

export default SavedMovies;