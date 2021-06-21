import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif"
const useStyles = makeStyles<Theme, Props>((theme) =>
({

    root: {
        position: "relative",
        height: "100vh",
        width: "100vw",
        margin: "0",
    },
    paperCard: {
        backgroundImage: (props) => (`url(${props.image})`),
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}));

interface Props {
    image: string,
    title: string,
    desc: string
}

const HeaderHome: React.FC<Props> = ({ ...props }) => {
    const classes = useStyles(props);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        AOS.init({
            offset: 150,
            duration: 1200,
        });
    }, []);


    if (loading) {
        var entranceTitle: any = document.querySelector(
            '.entrance-title'
        );
        const regex = /\S/g;
        entranceTitle.innerHTML = entranceTitle.textContent.replace(
            regex,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
            targets: '.entrance-title .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 6000,
            delay: (el, i) => 500 + 30 * i,
        });
    }

    if (loading) {
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
    return (
        <div className={classes.root} >
            <Paper square variant="outlined" className={classes.paperCard}>
                <div className="header-container">
                    <article>
                        <div data-aos='fade-left' className='entrance'>
                            <h1 className='entrance-title' >  {props.title}</h1>
                            <h5 className='entrance-subtitle'>
                                {props.desc}
                            </h5>
                        </div>
                    </article>
                </div>
            </Paper>
        </div>
    )
}

export default HeaderHome