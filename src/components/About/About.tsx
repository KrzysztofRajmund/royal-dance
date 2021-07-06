import React from 'react';
//assets
import Logo2 from "../../assets/logo2.png"
//react router
import { Link } from "react-router-dom"



const About: React.FC = () => {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    let userLocation: any = window.location.pathname


    return (


        <section className="cards-container about">
            <article>
                <div className="cards-content">
                    <h1><img src={Logo2} alt="logo" /></h1>
                    <h1>Studio Tańca</h1>

                </div>
                <div className="cards-subcontent">
                    <p className="cards-subcontent-title">Szczecińska Szkoła Tańca Royal Dance to miejsce pełne pasji...</p>
                    <br />
                    <p>Szczecińska Szkoła Tańca Royal Dance to miejsce pełne pasji, gdzie każdy znajdzie coś dla siebie.</p>
                    <p>Doświadczona kadra, fantastyczna atmosfera, klimatyczna sala oraz pełen profesjonalizm - to wszystko czego możecie doświadczyć przekraczając nasze progi.</p>
                    <p>Pozwól Nam porwać Cię w świat tańca a obiecujemy, że będziesz kroczyć przez życi tanecznym krokiem.</p>
                    {/* {userLocation === "/" ? <p><Link className="about-link" onClick={scrollUp} to="/onas" >czytaj więcej . . .</Link></p> : ""}
                    {userLocation === "/onas" ? <>
                        <p>Szkoleniowcami są : Andrej Mosejcuk i Kamila Kajak trzykrotni Mistrzowie par zawodowych, półfinaliści Mistrzostw Świata Europy oraz półfinaliści Blackpool.Marek Kosaty i Paulina Glazik trzykrotni Mistrzowie Swiata, dwukrotni zwycięzcy Blackpool Festival UK i International Open w Royal Albert Hall.Monika Marszałek tancerka baletu , która pochodzi z Krakowa gdzie uczyła się i pracowała w Operze Krakowskiej , obecnie związana z Operą na Zamku w Szczecinie.
                    Agata Korzemiacka trenerka przygotowania motorycznego oraz entuzjastka holistycznego podejścia do treningu. Autorka wielu programów dydaktycznych. </p>
                        <p>Szkoleniowcami są : Andrej Mosejcuk i Kamila Kajak trzykrotni Mistrzowie par zawodowych, półfinaliści Mistrzostw Świata Europy oraz półfinaliści Blackpool.</p></> : ""
                    } */}





                </div>
            </article >
        </section >

    )
}

export default About;