import './SearchForm.css';


import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm() {
    return (

        <section className="search-wrap">

            <div className="search-form">



                <div className="search-form__logo"></div>



                <form className="search-form__movies">

                    <input className="search-form__movies-name" type="text" name="search" placeholder="Фильм"></input>


                    <button className="search-form__find" type="submit">Найти</button>


                </form>
          

            </div>
            
            <FilterCheckbox />


        </section>









    );
}

export default SearchForm;