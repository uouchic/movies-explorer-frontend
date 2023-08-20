import './FilterCheckbox.css';


function FilterCheckbox() {
    return (


        <div className="checkbox__item">

            <label className="checkbox__wrap">
                <input className="checkbox__input" type="checkbox" name="checkbox" />
                <span className="checkbox__marker"></span>
            </label>

            <p className="checkbox__name">Короткометражки</p>



        </div>

    );
}

export default FilterCheckbox;