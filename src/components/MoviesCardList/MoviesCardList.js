import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

import * as React from "react";

import { useState, useEffect } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

const LG_INITIAL_CARD_COUNT = 16;
const MD_INITIAL_CARD_COUNT = 8;
const SM_INITIAL_CARD_COUNT = 5;

const LG_ROW_CARD_COUNT = 4;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 2;

function MoviesCardList(props) {

    const isDesktop = useMediaQuery("(min-width: 960px)");
    const isTablet = useMediaQuery("(min-width: 540px)");


    // -----------------------Кол-во добавляемых карточек -----------------------

    const cardColumnCount = isDesktop
        ? LG_ROW_CARD_COUNT
        : isTablet
            ? MD_ROW_CARD_COUNT
            : SM_ROW_CARD_COUNT;


            // ------------------------- Начальное количество карточек -------------------------

    const initialCardCount = isDesktop
        ? LG_INITIAL_CARD_COUNT
        : isTablet
            ? MD_INITIAL_CARD_COUNT
            : SM_INITIAL_CARD_COUNT;

            // ----------------------- стейт начального кол-ва карточек ---------------------

    const [visibleCardCount, setVisibleCardCount] = useState(
        initialCardCount
    );


    useEffect(() => {
        setVisibleCardCount(initialCardCount)
      }, [props.filterMovies]);

            // ----------------------------------вычисляем кол-во первоначального отображения карточек -------------------
    const roundedVisibleCardCount =
        (visibleCardCount / cardColumnCount) * cardColumnCount;

    const handleClick = () => {
        calculateCardCount();
    };

    const calculateCardCount = () => {
        if (isDesktop) {
            return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
        }

        if (isTablet) {
            return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
        }

        setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
    };

    return (
        <>
            {props.boolean ?

                <section className="movies-list">

                    {props.filterMovies.slice(0, roundedVisibleCardCount).map((movie) => (

                        <MoviesCard
                            key={movie.id}
                            trailerLink={movie.trailerLink}
                            link={"https://api.nomoreparties.co/" + movie.image.url}
                            name={movie.nameRU}
                            duration={(Math.floor(movie.duration / 60)) + "ч" + " " + (movie.duration - Math.floor(movie.duration / 60) * 60) + "м"}
                            saveMovie={props.saveMovie}
                            saveMovies={props.saveMovies}
                            movie={movie}
                            boolean={props.boolean}
                            delMovie={props.delMovie}
                            deletesMovie={props.deletesMovie}

                        />

                    ))}

                </section> :

                <section className="movies-list">

                    {props.filterMovies.map((movie) => (

                        <MoviesCard
                            key={movie.id}
                            link={movie.image}
                            trailerLink={movie.trailerLink}
                            name={movie.nameRU}
                            duration={(Math.floor(movie.duration / 60)) + "ч" + " " + (movie.duration - Math.floor(movie.duration / 60) * 60) + "м"}
                            movie={movie}
                            boolean={props.boolean}
                            delMovie={props.delMovie}
                            saveMovies={props.saveMovies}
                        />

                    ))}

                </section>}

                {props.boolean ?

            <button className={roundedVisibleCardCount < props.filterMovies.length ? "movies__btn" : "movies__btn movies__btn_show_none"} type="button" onClick={handleClick}>Ещё</button>
            : <div></div>}
        </>

    );
}

export default MoviesCardList;
