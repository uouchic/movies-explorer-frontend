import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";


const initialMovies = [
    {
        link: "https://images.unsplash.com/photo-1572988276585-71035689a285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Оно 2",
    },
    {
        link: "https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Чаки",
    },
    {
        link: "https://images.unsplash.com/photo-1518331539918-7a2dbf839306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        duration: "1ч 45м",
        nameRU: "Звездные войнын",
    },
    {
        link: "https://images.unsplash.com/photo-1589824769965-d2bdab6dfe57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Вермонт",
    },
    {
        link: "https://images.unsplash.com/photo-1599576270381-dfdb213dee2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Видеофильм",
    },
    {
        link: "https://images.unsplash.com/photo-1572988276585-71035689a285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Оно 2",
    },
    {
        link: "https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Чаки",
    },
    {
        link: "https://images.unsplash.com/photo-1518331539918-7a2dbf839306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        duration: "1ч 45м",
        nameRU: "Звездные войнын",
    },
    {
        link: "https://images.unsplash.com/photo-1589824769965-d2bdab6dfe57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Вермонт",
    },
    {
        link: "https://images.unsplash.com/photo-1599576270381-dfdb213dee2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Видеофильм",
    },
    {
        link: "https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Чаки",
    },
    {
        link: "https://images.unsplash.com/photo-1635100431192-180372735b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Приведение",
    },
    {
        link: "https://images.unsplash.com/photo-1589824769965-d2bdab6dfe57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Вермонт",
    },
    {
        link: "https://images.unsplash.com/photo-1599576270381-dfdb213dee2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Видеофильм",
    },
    {
        link: "https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Чаки",
    },
    {
        link: "https://images.unsplash.com/photo-1635100431192-180372735b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "1ч 45м",
        nameRU: "Приведение",
    },


]


function MoviesCardList() {
    return (

        <section className="movies-list">


            {initialMovies.map((movie) => (

                <MoviesCard
                    link={movie.link}
                    name={movie.nameRU}
                    duration={movie.duration}

                />                        

            ))}                 


        </section>

                  
    );
}

export default MoviesCardList;
