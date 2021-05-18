import React, { useState } from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

const ModalNav: React.FC = () => {

    return (

        <div className="modalNav">
            <section className="modal-logo">
                <Link to="/"><img src={Logo} alt="logo" /></Link>
            </section>
            <section className="modal-menu">
                <Link to="/onas">O Nas</Link>
                <div className="dropdown">
                    <span className="dropdown__button">Oferta</span>
                    <div className="dropdown__menu" >
                        <Link to="/taniec-rekreacyjny">Taniec rekreacyjny</Link>
                        <Link to="/taniec-sportowy">Taniec sportowy</Link>
                        <Link to="/wynajem-studia">Wynajem sali</Link>
                    </div>
                </div>
                <Link to="/galeria">Galeria</Link>
                <Link to="/kontakt">Kontakt</Link>
            </section>
            <section className="modal-socialmedia">
                <Link to="/"><img src={Facebook} alt="facebook" /></Link>
                <Link to="/"><img src={Instagram} alt="instagram" /></Link>
            </section>
        </div>

    )
}

export default ModalNav;
