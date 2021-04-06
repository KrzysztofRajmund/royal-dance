import React from 'react'

const Contact: React.FC = () => {
    return (
        <section className="cards-container">
            <article>
                <div className="cards-content">
                    <h1>Kontakt</h1>
                    <h1><a href="tel:+48-662-175-111">Tel. 662 175 111</a><br />
                        <a href='mailto:royaldance.szczecin@gmail.com?&subject=Royal Dance&body=Jak możemy pomóc?'>
                            <i className="far fa-envelope"></i>
                        </a>
                    </h1>


                </div>
                <div className="cards-subcontent">
                    <p className="cards-subcontent-title">Chcesz wykorzystać go na dobrą rozrywkę?</p>
                    <br />

                    <p>Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą rozrywkę?</p>
                    <br />

                    <p>Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą rozrywkę?</p>

                </div>
                <div className="cards-slider">

                </div>
            </article>
        </section>

    )
}

export default Contact;
