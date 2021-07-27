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
        scrollUp()
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <nav className="topnav-container">
            <section onClick={openModal} className='navicon'>
                <div
                    className={modal ? 'navicon-btn active' : 'navicon-btn not-active'}
                >
                    <span className=' navicon-span navicon-span-first'></span>
                    <span className='navicon-span navicon-span-second'></span>
                    <span className='navicon-span navicon-span-third'></span>
                </div>
            </section>
            {modal ? <ModalNav closeNavModal={closeModal} /> : (<React.Fragment>
                <section className="topnav-logo">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </section>
                <section className="topnav-menu">
                    <Link to="/onas" onClick={scrollUp}>O Nas</Link>
                    <div className="dropdown">
                        <span className="dropdown-button">Oferta</span>
                        <div className="dropdown-menu" >
                            <Link to="/taniec-rekreacyjny" onClick={scrollUp}>Taniec rekreacyjny</Link>
                            <Link to="/taniec-sportowy" onClick={scrollUp}>Taniec sportowy</Link>
                            <Link to="/wynajem-studia" onClick={scrollUp}>Wynajem sali</Link>
                        </div>
                    </div>
                    <Link to="/cennik" onClick={scrollUp}>Cennik</Link>
                    <Link to="/galeria" onClick={scrollUp}>Galeria</Link>
                    <Link to="/kontakt" onClick={scrollUp}>Kontakt</Link>
                </section>
                <section className="topnav-socialmedia">
                    <a href="https://www.facebook.com/royaldanceszczecin" target="_blank" rel="noreferrer" ><img src={Facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/royaldanceszczecin/" target="_blank" rel="noreferrer"  ><img src={Instagram} alt="instagram" /></a>
                </section>
            </React.Fragment>

            )}


        </nav>
    )
}

export default TopNav;
