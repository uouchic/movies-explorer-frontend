import './Portfolio.css';


function Portfolio() {
    return (

        <section className="portfolio">

            <h2 className="portfolio__title">Портфолио</h2>

            <ul className="portfolio__list">

                <li className="portfolio__item">
                    <a href="https://github.com/uouchic/how-to-learn" className="portfolio__link" target="blank">
                        <p className="portfolio__name">Статичный сайт</p>
                        <div className="portfolio__icon" target="blank"></div>
                    </a>

                </li>

                <li className="portfolio__item">
                    <a href="https://github.com/uouchic/yet-another-project" className="portfolio__link" target="blank">
                        <p className="portfolio__name">Адаптивный сайт</p>
                        <div className="portfolio__icon" target="blank"></div>
                    </a>
                </li>



                <li className="portfolio__item">
                    <a href="https://github.com/uouchic/react-mesto-api-full-gha" className="portfolio__link" target="blank">
                        <p className="portfolio__name">Одностраничное приложение</p>
                        <div className="portfolio__icon" target="blank"></div>
                    </a>
                </li>

            </ul>

        </section>

    );
}

export default Portfolio;