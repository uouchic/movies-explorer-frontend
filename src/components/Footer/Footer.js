import './Footer.css';

function Footer() {
    return (

        <div>
        <footer className="footer">

            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>

            <div className="footer__columns">
                <p className="footer__copyright">© 2023</p>

                <div className="footer__links">
                <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                <a className="footer__link" href="https://github.com/uouchic" target="blank">Github</a>

                </div>
              
            </div>

        </footer>

        </div>

    );
}

export default Footer;