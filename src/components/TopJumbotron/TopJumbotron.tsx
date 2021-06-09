import React, { useEffect } from 'react';
//anime
import anime from 'animejs';

const TopJumbotron: React.FC = () => {
    useEffect(() => {
        animationLoad()
    }, []);


    const animationLoad = () => {
        var entranceSubtitle: any = document.querySelector(
            '.entrance-subtitle'
        );
        const regex = /\S/g;
        entranceSubtitle.innerHTML = entranceSubtitle.textContent.replace(
            regex,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
            targets: '.entrance-subtitle .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 6000,
            delay: (el, i) => 3000 + 30 * i,
        });
    }

    let subtitle = "szczecińska szoła tańca"
    return (


        <section className="topjumbotron-container">
            <div className="topjumbotron-img">
                <article>
                    <div className='entrance'>
                        <h1 >Royal Dance</h1>
                        <h5 className='entrance-subtitle'>
                            {window.innerWidth <= 365 ? "szkoła tańca" : subtitle}
                        </h5>
                    </div>
                </article>
            </div>
        </section>

    )
}

export default TopJumbotron
