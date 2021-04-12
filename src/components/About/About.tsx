import React from 'react';
//assets
import Logo2 from "../../assets/logo2.png"



const About: React.FC = () => {

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

                    <p>Royal Dance to szkoła tańca, która dopiero zaczyna swoją działalność, ale z bardzo doświadczoną kadrą trenerską. Założycielami są Magdalena Geldner i Adrian Kopczyński, oboje młodzi , doświadczeni i z ogromną pasją do tańca. Magdalena Geldner jest Akademicką Mistrzynią Polski w tańcach latynoamerykańskich, finalistką London Open " The 2 Richards" , wielokrotna zwyciężczyni i finalistka polskich i międzynarodowych turniejów. Posiada najwyższą klasę międzynarodową S.</p>

                    <p>Adrian Kopczyński wielokrotny mistrz Polski w tańcach latynoamerykańskich , vicemistrz Mistrzostw Świata w latino i vicemistrz Świata w 10 tańcach, finalista Blackpool Dance Festiwal , posiada najwyższą klasę międzynarodową S.</p>
                    <p>Szkoleniowcami są : Andrej Mosejcuk i Kamila Kajak trzykrotni Mistrzowie par zawodowych, półfinaliści Mistrzostw Świata Europy oraz półfinaliści Blackpool.Marek Kosaty i Paulina Glazik trzykrotni Mistrzowie Swiata, dwukrotni zwycięzcy Blackpool Festival UK i International Open w Royal Albert Hall.Monika Marszałek tancerka baletu , która pochodzi z Krakowa gdzie uczyła się i pracowała w Operze Krakowskiej , obecnie związana z Operą na Zamku w Szczecinie.
                    Agata Korzemiacka trenerka przygotowania motorycznego oraz entuzjastka holistycznego podejścia do treningu. Autorka wielu programów dydaktycznych. </p>
                    <p>Szkoleniowcami są : Andrej Mosejcuk i Kamila Kajak trzykrotni Mistrzowie par zawodowych, półfinaliści Mistrzostw Świata Europy oraz półfinaliści Blackpool.</p>



                </div>
            </article>
        </section>

    )
}

export default About;