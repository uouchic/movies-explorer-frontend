import './MoviesCard.css';



function handleLikeClick() {
    
  }

function MoviesCard(props) {
    return (
        
        <article className="movies-card">

            <img className="movies-card__image" src={props.link} alt="" />

            <div className="movies-card__group">
                <h4 className="movies-card__title">{props.name}</h4>
                <button 
                  className="movies-card__like" 
                  type="button"
                  onClick={handleLikeClick}
                  ></button>

            </div>

            <p className="movies-card__duration">{props.duration}</p>      


        </article>


    );
}

export default MoviesCard;
