import './Profile.css';

import Header from "../Header/Header";

function Profile(props) {
    return (


        <>
            <Header 
            loggedIn={props.loggedIn}
            handleOpenNavleaving={props.handleOpenNavleaving}/>


            <main className="profile">

                <section className="profile-data">

                    <h4 className="profile__heading">Привет, Виталий!</h4>

                    <div className="profile__wrap">

                        <p className="profile__title">Имя</p>
                        <input
                            type="text"
                            className="profile__meaning"
                            value="Виталий"
                        />
                    </div>

                    <div className="profile__wrap">

                        <p className="profile__title">E-mail</p>
                        
                        <input
                            type="text"
                            className="profile__meaning"
                            value="pochta@yandex.ru"
                            required
                        />
                    </div>

                    <div className="profile-actions">

                    <button type="button" className="profile-actions__edit">Редактировать</button>
                    <button type="button" className="profile-actions__edit profile-actions__edit_text_color">Выйти из аккаунта</button>

                    </div>              

                </section>

            </main>


        </>
    );
}

export default Profile;