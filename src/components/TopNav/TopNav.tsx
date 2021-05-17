import React, { useState } from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import ModalNav from './ModalNav';

const TopNav: React.FC = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    };

    const closeModal = () => {
        setModal(false);
    }

    return (
        <nav className="topnav-container">
            <section onClick={openModal} className='nav-icon'>
                <div
                    className={modal ? 'nav-icon__btn active' : 'nav-icon__btn not-active'}
                >
                    <span className=' nav-icon__span nav-icon__span-first'></span>
                    <span className='nav-icon__span nav-icon__span-second'></span>
                    <span className='nav-icon__span nav-icon__span-third'></span>
                </div>
            </section>
            {modal ? <div onClick={closeModal}><ModalNav /> </div> : (<React.Fragment>
                <section className="topnav-logo">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </section>
                <section className="topnav-menu">
                    <Link to="/onas">O Nas</Link>
                    <div className="dropdown">
                        <span className="dropdown__button">Oferta</span>
                        <div className="dropdown__menu" >
                            <Link to="/taniec-rekreacyjny">Taniec rekreacyjny</Link>
                            <Link to="/taniec-sportowy">Taniec sportowy</Link>
                            <Link to="/wynajem-sali">Wynajem sali</Link>
                        </div>
                    </div>
                    <Link to="/galeria">Galeria</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </section>
                <section className="topnav-socialmedia">
                    <Link to="/"><img src={Facebook} alt="facebook" /></Link>
                    <Link to="/"><img src={Instagram} alt="instagram" /></Link>
                </section>
            </React.Fragment>

            )}


        </nav>
    )
}

export default TopNav;
