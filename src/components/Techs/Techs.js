import './Techs.css';

function Techs() {
    return (

        <section className="techs">
            <h2 className="section-title">Технологии</h2>

            <h3 className="section-subtitle">7 технологий</h3>
            <p className="paragraph paragraph_techs">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

            <ul className="nav">
                <li className="nav__list"><a href="https://html.spec.whatwg.org/multipage/" className="nav__link" target="blank">HTML</a></li>
                <li className="nav__list"><a href="https://www.w3.org/Style/CSS/" className="nav__link" target="blank">CSS</a></li>
                <li className="nav__list"><a href="https://learn.javascript.ru/" className="nav__link" target="blank">JS</a></li>
                <li className="nav__list"><a href="https://react.dev/" className="nav__link" target="blank"> React</a></li>
                <li className="nav__list"><a href="https://github.com/uouchic" className="nav__link" target="blank">Git</a></li>
                <li className="nav__list"><a href="https://expressjs.com/ru/" className="nav__link" target="blank">Express.js</a></li>
                <li className="nav__list"><a href="https://www.mongodb.com/" className="nav__link" target="blank">mongoDB</a></li>
            </ul>

        </section>

    );
}

export default Techs;