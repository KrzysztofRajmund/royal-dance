import React, { useEffect, useState } from 'react';
//components
import CardsSlider from './CardsSlider';
//assets
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Cards: React.FC = () => {

    const [sliderContainer, setSliderContainer] = useState<any>()
    const [subcontentContainer, setSubcontentContainer] = useState<any>()

    useEffect(() => {
        setSliderContainer(document.getElementsByClassName("cards-slider")[0]);
        setSubcontentContainer(document.getElementsByClassName("cards-subcontent")[0]);
    }, [])

    let count = 100
    console.log("pathname", window.location.pathname)

    setInterval(() => {

        let slider: any = document.getElementById("slider-1");

        if (count >= 300) {
            count = 0

            slider.style.marginLeft = `-${count}%`

        } else {

            if (slider === null) {
                return
            } else {
                slider.style.marginLeft = `-${count}%`
                console.log(slider, "slider")
            }


        }

        count = 100 + count
    }, 4000)




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
                    <div className="sliders">
                        <section className="slider slider-one" id="slider-1">

                        </section>
                        <section className="slider slider-two" id="slider-2">

                        </section>
                        <section className="slider slider-three" id="slider-3">

                        </section>
                    </div>

                    <CardsSlider sliderContainer={sliderContainer} subcontentContainer={subcontentContainer} />
                </div>
            </article>
        </section>

    )
}

export default Cards;