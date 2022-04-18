import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardMedia, Container, CssBaseline, Typography } from "@material-ui/core";
import NavBarLanding from "../NavBar/NavBarLanding";
import { Link } from "react-router-dom";
import imagen from '../../assets/img_landing.png';
import img_bg from '../../assets/fondo.jpg';

const useStyles = makeStyles((theme)=>({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${img_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    body:{
        display:'flex',
    },
    bodyLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',

        position: 'absolute',
        width: '540px',
        height: '356px',
        left: '135px',
        top: '220px',
    },
    bodyRight:{
        position: 'absolute',
        width: '353px',
        // height: '693px',
        left: '835px',
        top: '200px',
    },
    title:{
        color:'#F4F5F7',
        /* Inside auto layout */
        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '16px 0px',
    },
    parrafo:{
        color: '#EEEFF4',
    }
}));
export default function(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <NavBarLanding />
            <div className={classes.body}>
                <div className={classes.bodyLeft}>
                    <Container>
                        <Typography className={classes.title}>
                            <h1>Bienvenido a Cinem<span style={{'color':'black'}}>App</span></h1>
                        </Typography>
                        <Typography component='p' className={classes.parrafo}>
                        Encuentra tus peliculas favoritas. compra tus entradas y disfrata de los mejores momentos con familia y amigos.
                        </Typography>
                        <br/><br/>
                        <Link to={`/home`} style={{'textDecoration':'none'}}>
                            <Button variant="contained" color="primary">Ingresa Ya!</Button>
                        </Link>
                    </Container>
                </div>
                <div className={classes.bodyRight}>
                    <CardMedia
                    component='img'
                    image = {imagen}
                    ></CardMedia>
                </div>
            </div>
        </div>
    );
}