import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
//components
import CardsSlider from '../Cards/CardsSlider';

const Contact: React.FC = () => {
    const [sliderContainer, setSliderContainer] = useState<any>()
    const [subcontentContainer, setSubcontentContainer] = useState<any>()

    useEffect(() => {
        setSliderContainer(document.getElementsByClassName("cards-slider")[0]);
        setSubcontentContainer(document.getElementsByClassName("cards-subcontent")[0]);
    }, [])
    return (
        <section className="cards-container">
            <article>
                <div className="cards-content contact-contact">
                    <h1>Kontakt</h1>
                    <h1><a href="tel:+48-662-175-111">Tel. 662 175 111</a><br />
                        <a href='mailto:royaldance.szczecin@gmail.com?&subject=Royal Dance&body=Jak możemy pomóc?'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </h1>


                </div>
                <div className="cards-subcontent contact-address">
                    <a
                        href='https://www.google.com/maps/search/79+sorting+house+manchester/@53.4829171,-2.233837,17z/data=!3m1!4b1'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <h1>Adres</h1>
                        <h1>
                            Lelewela 8a<br />
                            71-154<br />
                            Szczecin<br />
                        </h1>
                    </a>
                </div>
                <div className="cards-slider map">
                    <CardsSlider sliderContainer={sliderContainer} subcontentContainer={subcontentContainer} />
                </div>
            </article>
        </section>

    )
}

export default Contact;
