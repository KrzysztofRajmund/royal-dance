import React from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

interface Props {
    closeNavModal: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const ModalNav: React.FC<Props> = ({ ...props }) => {
    console.log(props)
    return (

        <div className="modalnav">
            <section className="modal-logo">
                <Link to="/" onClick={props.closeNavModal} ><img src={Logo} alt="logo" /></Link>
            </section>
            <section className="modal-menu">
                <Link to="/onas" onClick={props.closeNavModal} >O Nas</Link>
                <div className="dropdown">
                    <span className="dropdown-button">Oferta</span>
                    <div className="dropdown-menu" >
                        <Link to="/taniec-rekreacyjny" onClick={props.closeNavModal} >Taniec rekreacyjny</Link>
                        <Link to="/taniec-sportowy" onClick={props.closeNavModal} >Taniec sportowy</Link>
                        <Link to="/wynajem-studia" onClick={props.closeNavModal} >Wynajem sali</Link>
                    </div>
                </div>
                <Link to="/galeria" onClick={props.closeNavModal} >Galeria</Link>
                <Link to="/kontakt" onClick={props.closeNavModal} >Kontakt</Link>
            </section>
            <section className="modal-socialmedia">
                <a href="https://www.facebook.com/royaldanceszczecin" onClick={props.closeNavModal} target="_blank" rel="noreferrer"  ><img src={Facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/royaldanceszczecin/" onClick={props.closeNavModal} target="_blank" rel="noreferrer" ><img src={Instagram} alt="instagram" /></a>
            </section>
        </div>

    )
}

export default ModalNav;
