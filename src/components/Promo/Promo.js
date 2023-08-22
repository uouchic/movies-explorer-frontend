import './Promo.css';

import promoLogo from "../../images/text__COLOR_landing-logo.svg";

function Promo() {
  return (
    <section className="promo">

      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>

      <div className="promo__illustration">

        <img className="promo__img" src={promoLogo} alt="Спираль" />


      </div>



    </section>
  );
}

export default Promo;
