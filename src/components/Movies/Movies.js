import './Movies.css';

import Header from "../Header/Header";

import Preloader from "../Preloader/Preloader";

import MoviesCardList from "../MoviesCardList/MoviesCardList";

import SearchForm from "../SearchForm/SearchForm";



import Footer from "../Footer/Footer";

import { useState, useEffect } from "react";

import * as MainApi from "../../utils/MainApi";

import * as movies from "../../utils/MoviesApi";

function Movies(props) {

    const [isLoading, setIsLoading] = useState(false);

    const [allMovies, setAllMovies] = useState([]);

    const [isSubmit, setIsSubmit] = useState(false);




    // стейт отобранных фильмов
    const [filterMovies, setFilterMovies] = useState([]);


    const [onSave, setOnSave] = useState(false);



    // стейт значения из формы поиска
    const [formValueMovies, setFormValueMovies] = useState(" ");
    /* console.log(formValueMovies); */

    // функция записи в стейт поисковую фразу из формы поиска
    function handleChangeMovies(e) {
        e.preventDefault();
        setFormValueMovies(e.target.value);

    };




    function handleFilteredMviesApi(data) {

        props.checkboxSwitch ?
            setFilterMovies((data.filter(
                m => m.nameRU.toLowerCase().includes(formValueMovies.toLowerCase())).filter(m => m.duration < 40)
            )) :
            setFilterMovies(data.filter(
                m => m.nameRU.toLowerCase().includes(formValueMovies.toLowerCase())
            ));    
    }


    function handleFilteredMviesLocal() {

        props.checkboxSwitch ?
            setFilterMovies((allMovies.filter(
                m => m.nameRU.toLowerCase().includes(formValueMovies.toLowerCase())).filter(m => m.duration < 40)
            )) :
            setFilterMovies(allMovies.filter(
                m => m.nameRU.toLowerCase().includes(formValueMovies.toLowerCase())
            ));
    }
    
    

    // фунуция фильтрования фильмов в зависимости от поисковой фразы и положения чекбокса короткометражек
    function handleSearchMovies(e) {
        e.preventDefault();
        if (isSubmit) {
            handleFilteredMviesLocal();
        } else {
            setIsLoading(true);
            movies.getMovies()
                .then((data) => {
                    //console.log(data);
                    setAllMovies(data);
                    setIsSubmit(true);
                    handleFilteredMviesApi(data);
                })
                .catch((err) => console.log(err))
                .finally(() => {setTimeout (() => {setIsLoading(false)}, 2000)})
        }
    };

    useEffect(() => {
        handleFilteredMviesLocal();
    }, [props.checkboxSwitch]);

    useEffect(() => {
        const filterMovies = (JSON.parse(localStorage.getItem("filterMovies")));
        if (filterMovies) {
            setFilterMovies(filterMovies)
        }

        const formValue = localStorage.getItem("formValue");
        if (formValue) {
            setFormValueMovies(formValue)
        }

        const checkboxSwitch = (JSON.parse(localStorage.getItem("checkboxSwitch")));
        if (checkboxSwitch) {
            props.setCheckboxSwitch(checkboxSwitch)
        }

        const allMovies = (JSON.parse(localStorage.getItem("allMovies")));
        if (allMovies) {
            setAllMovies(allMovies)
        }

        const submit = (JSON.parse(localStorage.getItem("submit")));
        if (submit) {
            setIsSubmit(submit)
        }
    }, []);


    useEffect(() => {
        if (isSubmit) {
            localStorage.setItem("filterMovies", JSON.stringify(filterMovies));
        }
    }, [filterMovies, isSubmit]);

    useEffect(() => {
        if (isSubmit) {
            localStorage.setItem("formValue", (formValueMovies));
        }
    }, [formValueMovies, isSubmit]);

    useEffect(() => {
        if (isSubmit) {
            localStorage.setItem("checkboxSwitch", JSON.stringify(props.checkboxSwitch));
        }
    }, [isSubmit, props.checkboxSwitch]);

    useEffect(() => {
        if (isSubmit) {
            localStorage.setItem("allMovies", JSON.stringify(allMovies));
        }
    }, [isSubmit, allMovies]);

    useEffect(() => {
        if (isSubmit) {
            localStorage.setItem("submit", JSON.stringify(isSubmit));
        }
    }, [isSubmit]);


    return (

        <>
            <Header
                loggedIn={props.loggedIn}
                handleOpenNavleaving={props.handleOpenNavleaving} />

            <main className="movies">

                <SearchForm
                    checkboxSwitch={props.checkboxSwitch}
                    handleСhangeCheckbox={props.handleСhangeCheckbox}                  
                    formValueMovies={formValueMovies}
                    handleChangeMovies={handleChangeMovies}
                    handleSearchMovies={handleSearchMovies}
                />

                {(filterMovies == 0 && isSubmit) ? <p className="movies__massenge">Ничего не найдено!</p> : ((isLoading) ?

                    <Preloader /> :

                    <MoviesCardList
                        filterMovies={filterMovies}
                        setFilterMovies={setFilterMovies}
                        saveMovie={props.saveMovie}
                        boolean={true}
                        delMovie={props.delMovie}
                        saveMovies={props.saveMovies}
                        deletesMovie={props.deletesMovie}


                    />)}
                    
            </main>

            <Footer />

        </>

    );
}

export default Movies;
