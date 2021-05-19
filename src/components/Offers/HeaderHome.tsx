import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//components
import Menu from "./Menu";
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif"
const useStyles = makeStyles<Theme, Props>((theme) =>
({

    root: {
        position: "relative",
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        width: "100vw",
        margin: "0",
        // [theme.breakpoints.down(450)]: {
        //     height: "100%",
        // },

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
        // alignItems: "right",
        // textAlign: "right",
        // transition: "all 3s easy-in-out",
        // padding: "2rem",

    },
    // title: {
    //     fontFamily: fontJosefin,
    //     color: '#fff',
    //     textAlign: "center",
    //     fontSize: "4rem",
    //     textTransform: "uppercase",
    //     // backgroundColor: "rgba(0, 0, 0, 0.381)",
    //     // padding: "1rem 2rem",
    //     '&::after': {
    //         display: "block",
    //         width: "60px",
    //         height: "3px",
    //         background: "#d7bd78",
    //         margin: "2rem auto 0",
    //         content: '""',
    //     }
    // },

    // desc: {
    //     fontFamily: fontPoppin,
    //     color: "#fff",
    //     textAlign: "center",
    //     fontSize: "2.5rem",
    //     padding: "4rem",
    //     // padding: "1rem 2rem",
    //     // marginTop: "4rem",
    //     // backgroundColor: "rgba(0, 0, 0, 0.381)",
    // }

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
    }, [AOS]);


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
            duration: 6000,
            delay: (el, i) => 3000 + 30 * i,
        });
    }

    if (loading) {
        var textWrapper: any = document.querySelector(
            '.entrance-page__wrapper--title'
        );
        const regex = /\S/g;
        textWrapper.innerHTML = textWrapper.textContent.replace(
            regex,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
            targets: '.entrance-page__wrapper--title .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 6000,
            delay: (el, i) => 500 + 30 * i,
        });
    }
    return (
        <div className={classes.root} >
            {/* <Paper square variant="outlined" className={classes.paperCard}>

                <Typography className={classes.title}>
                    {props.title}
                </Typography>
                <Typography className={classes.desc}>
                    {props.desc}
                </Typography>
            </Paper> */}

            <Paper square variant="outlined" className={classes.paperCard}>
                <div className="header-container">
                    <article>
                        <div data-aos='fade-left' className='entrance-page__wrapper '>
                            <h1 className='entrance-page__wrapper--title' >  {props.title}</h1>
                            <h5 className='entrance-page__wrapper--animation'>
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
