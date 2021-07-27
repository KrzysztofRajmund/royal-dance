import React from 'react';
//assets
import Logo2 from "../../assets/logo2.png"

interface Props {
    id: string,
    image: string,
    title: string,
    subtitle: string,
    desc: string
}

const Offers: React.FC<Props> = ({ id, image, title, subtitle, desc }) => {


    let sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <section className="cards-container offers">
            <article id={id}>
                <div className="cards-content" style={sectionStyle}>
                    <h1><img src={Logo2} alt="logo" /></h1>
                    <h1 className="offers-title">{title}</h1>
                </div>
                <div className="cards-subcontent">
                    <p className="cards-subcontent-title">{subtitle}</p>
                    <br />
                    <p>{desc}</p>
                    <p>{desc}</p>
                </div>
            </article>
        </section>

    )
}

export default Offers;