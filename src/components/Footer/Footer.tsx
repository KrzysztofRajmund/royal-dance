import React from 'react';
import Logo from "../../assets/logo.png"

const Footer: React.FC = () => {
    return (
        <section className="footer">
            <article className="footer-top">
                <img src={Logo} alt="logo" />
            </article>
            <article className="ooter-middle">
                <h5>Copyrights 2021. Created by RajmundTech</h5>
            </article>
            <article className="footer-bottom">
                <img src="arrow" alt="up-image" />
                <h4>up</h4>
            </article>
        </section>
    )
}

export default Footer
