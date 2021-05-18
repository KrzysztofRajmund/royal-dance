import React, { useEffect } from 'react';
//react-scroll
import { Link } from 'react-scroll';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


interface Props {

    menu: {
        latino?: string,
        standard?: string,
        kids?: string,
        wedding?: string,
        proAM?: string,
        ballet?: string
    }
}

const Menu: React.FC<Props> = ({ ...props }) => {
    console.log("props", props)
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 800,
        });
    }, []);

    const displayFastMenu = () => {
        const targetMenuNav = document.getElementsByClassName(
            'titles-container__menu-nav'
        )[0];
        const targetMenuFast = document.getElementsByClassName(
            'titles-container__menu-fast'
        )[0];
        targetMenuNav.classList.toggle('active');
        targetMenuFast.textContent === 'Menu'
            ? (targetMenuFast.textContent = 'Zamknij')
            : (targetMenuFast.textContent = 'Menu');
    };

    const getIDHandler = (word: string | null) => {
        let newWord: any
        if (word !== null) {
            newWord = word.split(" ")[0]
        } else {
            newWord = word
        }
        return newWord
    }

    return (
        <React.Fragment>
            <article className='titles-container titles-container__nav-sticky'>

                <section
                    className='titles-container__menu-fast'
                    onClick={displayFastMenu}
                >
                    Menu
          </section>
                <div className='titles-container__menu-nav'>
                    <div className='titles-container__menu-nav-card'>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to={getIDHandler(props.menu.latino ? props.menu.latino : null)}
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                {props.menu.latino}
                            </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to={getIDHandler(props.menu.standard ? props.menu.standard : null)}
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                {props.menu.standard}
                            </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to={getIDHandler(props.menu.kids ? props.menu.kids : null)}
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                {props.menu.kids}
                            </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to={getIDHandler(props.menu.wedding ? props.menu.wedding : null)}
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                {props.menu.wedding}
                            </Link>
                        </h4>

                        <h4 className='titles-container__subtitle'>
                            <Link
                                to={getIDHandler(props.menu.proAM ? props.menu.proAM : null)}
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                {props.menu.proAM}
                            </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to={getIDHandler(props.menu.ballet ? props.menu.ballet : null)}
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                {props.menu.ballet}
                            </Link>
                        </h4>

                    </div>
                </div>

            </article>
        </React.Fragment>
    )
}

export default Menu;
