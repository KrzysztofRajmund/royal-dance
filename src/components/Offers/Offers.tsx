import React from 'react';
//assets
import Logo2 from "../../assets/logo2.png"



const Offers: React.FC = () => {

    return (


        <section className="cards-container offers">
            <article>
                <div className="cards-content">
                    <h1><img src={Logo2} alt="logo" /></h1>
                    <h1>Ladies Latino</h1>

                </div>
                <div className="cards-subcontent">
                    <p className="cards-subcontent-title">Taniec dla kobiet</p>
                    <br />

                    <p>Dla każdej kobiety, która kocha gorące rytmy latynoskie, polecamy taniec Latino Ladies.</p>

                    <p>W trakcie zajęć poznasz wiele kroków  latynowskich tańców, a to wszystko przy gorących rytmach muzyki.</p>




                </div>
            </article>
        </section>

    )
}

export default Offers;