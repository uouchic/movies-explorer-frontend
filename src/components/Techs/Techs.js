import './Techs.css';

function Techs() {
    return (

        <section className="techs">
            <h2 className="section-title">Технологии</h2>

            <h3 className="section-subtitle section-subtitle_location_techs">7 технологий</h3>
            <p className="paragraph paragraph_techs">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

            <ul className="nav nav__techs">
                <li className="nav__list"><a href="2" className="nav__link">HTML</a></li>
                <li className="nav__list"><a href="2" className="nav__link">CSS</a></li>
                <li className="nav__list"><a href="2" className="nav__link">JS</a></li>
                <li className="nav__list"><a href="2" className="nav__link">React</a></li>
                <li className="nav__list"><a href="2" className="nav__link">Git</a></li>
                <li className="nav__list"><a href="2" className="nav__link">Express.js</a></li>
                <li className="nav__list"><a href="2" className="nav__link">mongoDB</a></li>
            </ul>




        </section>

    );
}

export default Techs;