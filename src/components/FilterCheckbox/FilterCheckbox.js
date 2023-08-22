import './FilterCheckbox.css';


function FilterCheckbox(props) {
    return (


        <div className="checkbox">

            <div className="checkbox__wrap">

                <div className="checkbox__switch" onClick={props.handleСhangeCheckbox}>
                    <div className={props.checkboxSwitch ? "checkbox__marker checkbox__marker_position_includ" : "checkbox__marker"}>

                    </div>
                </div>
            </div>

            <p className="checkbox__name">Короткометражки</p>

        </div>

    );
}

export default FilterCheckbox;