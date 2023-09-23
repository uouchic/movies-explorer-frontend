import './MoviesCard.css';

import { useState, useEffect } from "react";

import * as MainApi from "../../utils/MainApi";




function MoviesCard(props) {


    const [isllike, setIsllike] = useState(false);

    
    
    const [idSaveMovie, setIdSaveMovie] = useState("");

    function deleteMovies () {
        props.delMovie(props.movie._id);

    }

       
    const isOwner = props.saveMovies.some((i) => i.movieId === props.movie.id);

    console.log(isOwner);

      function handleLikeClick() {
        // setIsllike(!isllike);
        if (!isOwner) {
            props.saveMovie(props.movie);
            setIsllike(!isllike)
            // console.log(props.movie);
            // console.log(idSaveMovie)

        } else {

            // console.log(idSaveMovie);
               
            props.deletesMovie(props.movie.id) 
            // props.delMovie(idSaveMovie);   

        }
        
    }


 




    return (

        props.boolean ?

            <article className="movies-card">

                <a href={props.trailerLink} target="blank"><img className="movies-card__image" src={props.link} alt={props.name} /></a>

                <div className="movies-card__group">
                    <h4 className="movies-card__title">{props.name}</h4>

                    <button
                        className={(isOwner) ? "movies-card__like movies-card__like_state_active" : "movies-card__like"}
                        type="button"
                        onClick={handleLikeClick}
                        saveMovie={props.saveMovie}

                    ></button>

                </div>

                <p className="movies-card__duration">{props.duration}</p>


            </article> :

            <article className="movies-card">

                <a href={props.trailerLink} target="blank"><img className="movies-card__image" src={props.link} alt={props.name} /></a>

                <div className="movies-card__group">
                    <h4 className="movies-card__title">{props.name}</h4>

                    <button
                        className={"movies-card__like movies-card__like_state_dell"}
                        type="button"
                        onClick={deleteMovies}
                    //   saveMovie={props.saveMovie}

                    ></button>

                </div>

                <p className="movies-card__duration">{props.duration}</p>


            </article>


    );
}

export default MoviesCard;
