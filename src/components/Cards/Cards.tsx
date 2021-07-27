import React, { useEffect, useState } from 'react';
//components
import CardsSlider from './CardsSlider';


const Cards: React.FC = () => {

    //global var
    let sliderFirst: any = document.getElementById("slider-1");

    //useState hook
    const [sliderContainer, setSliderContainer] = useState<any>()
    const [subcontentContainer, setSubcontentContainer] = useState<any>()

    //useEffect hooks
    useEffect(() => {
        setSliderContainer(document.getElementsByClassName("cards-slider")[0]);
        setSubcontentContainer(document.getElementsByClassName("cards-subcontent")[1]);
    }, [])

    return (


        <section className="cards-container">
            <article>
                <div className="cards-content">
                    <h1>Kursy grupowe</h1>
                    <h1>Kursy indywiduane</h1>

                </div>
                <div className="cards-subcontent">
                    <p>Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą rozrywkę?</p>
                    <br />

                    <p>Zapraszamy do naszej szkoły tańca</p>

                </div>
                <div className="cards-slider">
                    <div className="sliders">
                        <section className="slider slider-one" id="slider-1">

                        </section>
                    </div>

                    <CardsSlider sliderContainer={sliderContainer} subcontentContainer={subcontentContainer} sliderFirst={sliderFirst} />
                </div>
            </article>
        </section>

    )
}

export default Cards;