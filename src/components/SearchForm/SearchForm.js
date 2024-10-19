import './SearchForm.css';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

    return (

        <section className="search-wrap">

            <div className="search-form">

                <div className="search-form__logo"></div>

                <form className="search-form__movies" onSubmit={props.handleSearchMovies}>

                    <input
                        className="search-form__movies-name"
                        type="text"
                        name="search"
                        placeholder="Фильм"
                        value={props.formValueMovies}
                        required 
                        autoComplete="off"
                        minLength="1"
                        maxLength="15"
                        onChange={props.handleChangeMovies}
                        ></input>


                    <button className="search-form__find" type="submit" >Найти</button>

                </form>

            </div>

            <FilterCheckbox checkboxSwitch={props.checkboxSwitch} handleСhangeCheckbox={props.handleСhangeCheckbox} />

        </section>

    );
}

export default SearchForm;