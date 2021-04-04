import React from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

const TopNav: React.FC = () => {
    return (
        <nav className="topnav-container">
            <section className="topnav-logo">
                <Link to="/"><img src={Logo} alt="logo" /></Link>
            </section>
            <section className="topnav-menu">
                <Link to="/onas">O Nas</Link>
                <Link to="/oferta">Oferta</Link>
                <Link to="/galeria">Galeria</Link>
                <Link to="/kontakt">Kontakt</Link>
            </section>
            <section className="topnav-socialmedia">
                <Link to="/"><img src={Facebook} alt="facebook" /></Link>
                <Link to="/"><img src={Instagram} alt="instagram" /></Link>
            </section>

        </nav>
    )
}

export default TopNav;
