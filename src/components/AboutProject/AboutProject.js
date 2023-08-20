import './AboutProject.css';

function AboutProject() {
    return (

        <section className="about-project">
            <h2 className="section-title">О проекте</h2>

            <article className="two-columns two-columns_location_project">

                <div className="two-columns__main-text">
                    <h3 className="two-columns__title">Дипломный проект включал 5 этапов</h3>
                    <p className="two-columns__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className="two-columns__main-text">
                    <h3 className="two-columns__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="two-columns__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>

            </article>

            <article className="table">

                <div className="table__short-cell">
                    <h4 className="table__heading table__heading_pouring_green">1 неделя</h4>
                    <p className="table__text">Back-end</p>
                </div>

                <div className="table__long-cell">
                    <h4 className="table__heading table__heading_pouring_grey">4 недели</h4>
                    <p className="table__text">Front-end</p>

                </div>
            </article>

        </section>
    );
}

export default AboutProject;