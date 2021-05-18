import React from 'react'
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//components
import Menu from "./Menu";

const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif"
const useStyles = makeStyles<Theme, Props>((theme) =>
({

    root: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "start",
        height: "60vh",
        width: "100vw",
        margin: "0",
        [theme.breakpoints.down(450)]: {
            height: "100%",
        },

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
        alignItems: "center",
        transition: "all 3s easy-in-out",
        padding: "2rem",

    },
    title: {
        fontFamily: fontJosefin,
        color: '#fff',
        textAlign: "center",
        fontSize: "4rem",
        textTransform: "uppercase",
        // backgroundColor: "rgba(0, 0, 0, 0.381)",
        // padding: "1rem 2rem",
        '&::after': {
            display: "block",
            width: "60px",
            height: "3px",
            background: "#d7bd78",
            margin: "2rem auto 0",
            content: '""',
        }
    },

    desc: {
        fontFamily: fontPoppin,
        color: "#fff",
        textAlign: "center",
        fontSize: "2.5rem",
        padding: "4rem",
        // padding: "1rem 2rem",
        // marginTop: "4rem",
        // backgroundColor: "rgba(0, 0, 0, 0.381)",
    }

}));

interface Props {
    image: string,
    title: string,
    desc: string,
    menu: {
        latino: string,
        standard: string,
        kids: string,
        wedding?: string,
        proAM?: string,
        ballet?: string

    }
}

const Header: React.FC<Props> = ({ ...props }) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root} >
            <Paper square variant="outlined" className={classes.paperCard}>

                <Typography className={classes.title}>
                    {props.title}
                </Typography>
                <Typography className={classes.desc}>
                    {props.desc}
                </Typography>
            </Paper>

            <Menu menu={props.menu} />
        </div>
    )
}

export default Header
