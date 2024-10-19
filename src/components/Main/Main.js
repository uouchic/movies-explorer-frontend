import './Main.css';

import Header from "../Header/Header";

import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

import Footer from "../Footer/Footer";

function Main(props) {

    return (
        <>

            <Header
                loggedIn={props.loggedIn}
                handleOpenNavleaving={props.handleOpenNavleaving}
                bacgroundHeader={props.bacgroundHeader}

            />

            <main className="content">

                <Promo />

                <AboutProject />

                <Techs />

                <AboutMe />

                <Portfolio />

            </main>

            <Footer />

        </>


    );
}

export default Main;
