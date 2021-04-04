import React from 'react';
//components
import CardsSlider from './CardsSlider';

const Cards: React.FC = () => {
    return (


        <section className="cards-container">
            <article>
                <div className="cards-content">
                    <h1>Taniec towarzyski</h1>
                    <h1>Main Content</h1>

                </div>
                <div className="cards-subcontent">
                    <p className="cards-subcontent-title">Chcesz wykorzystać go na dobrą rozrywkę?</p>
                    <br />

                    <p>Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą rozrywkę?</p>
                    <br />

                    <p>Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą rozrywkę?</p>

                </div>
                <div className="cards-slider">
                    <CardsSlider />
                </div>
            </article>
        </section>

    )
}

export default Cards;