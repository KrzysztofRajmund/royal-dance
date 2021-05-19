import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';

const TopJumbotron: React.FC = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
    }, []);


    if (loading) {
        var textWrapper: any = document.querySelector(
            '.entrance-page__wrapper--animation'
        );
        const regex = /\S/g;
        textWrapper.innerHTML = textWrapper.textContent.replace(
            regex,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
            targets: '.entrance-page__wrapper--animation .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 4000,
            delay: (el, i) => 500 + 30 * i,
        });
    }
    return (


        <section className="topjumbotron-container">
            <div className="topjumbotron-img">
                <article>
                    {/* <h1>Szczecińska Szkoła Tańca</h1>
                    <h3>Lelewela 8a, Szczecin</h3> */}
                    <div className='entrance-page__wrapper'>
                        <h1 >Royal Dance</h1>
                        <h5 className='entrance-page__wrapper--animation'>
                            {' '}
            szczecińska szkoła tańca
          </h5>
                    </div>
                </article>
            </div>
        </section>

    )
}

export default TopJumbotron
