import './AboutMe.css';

import aboutImage from "../../images/pic__COLOR_pic.png";

function AboutMe() {
    return (

        <section className="about-me">

            <h2 className="section-title">Студент</h2>

            <div className="two-columns two-columns_location_me">

                <div className="two-columns__me-text">

                    <h3 className="two-columns__subtitle">Виталий</h3>

                    <h4 className="two-columns__me-title">Фронтенд-разработчик, 30 лет</h4>

                    <p className="two-columns__me-paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

                    <a className="two-columns__me-link" href="https://github.com/uouchic" target="blank">Github</a>


                </div>

                <img src={aboutImage} alt="Студент Виталий" className="two-columns__me-portrait" />

            </div>

        </section>

    );
}

export default AboutMe;