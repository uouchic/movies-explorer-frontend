import './NotFound.css';

import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="content">
            <section className="not-found">

                <div className="not-found__data">

                    <div className="not-found__wrap">

                        <h2 className="not-found__err">404</h2>

                        <p className="not-found__message">Страница не найдена</p>

                    </div>

                </div>

                <Link to="/" className="not-found__link">Назад</Link>

            </section>

        </main>
    );
}

export default NotFound;