import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        marginTop: '100px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22272E',
        width: '80vh',
        height: '50vh',
    },
    image: {
        width: '80px',
        height: '100px',
        borderRadius: '25px',
    }

}));
const Perfil = () => {
    const user = useSelector(state => state.userInfo);
    console.log(user)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={3}>
                        <img className={classes.image} src='https://img2.freepng.es/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg' alt="" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography component="h5" variant="h5" color="primary">
                            {user?.nombre}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography component='h5' variant="subtitle1" color="secondary">
                            {user?.apellido}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component='h5' variant="subtitle1" color="secondary">
                            {user?.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component='h4' color="primary">Estado</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography component='h4' color="primary">Tikets</Typography>
                    </Grid>
                    {
                        user?.tikets?.map(tiket => {
                            return (
                                <>
                                    <Grid item xs={12} sm={4} >
                                        <Typography component='h4' color="primary">{tiket.numero}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                        <Typography component='h4' color="primary">{tiket.numero_sala}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                        <Typography component='h4' color="primary">{tiket.fecha_hora}</Typography>
                                    </Grid>
                                </>
                            )
                        })}
                </Grid>

            <div>
                <Link to='/home'>volver</Link>
            </div>

            </Container>
        </div>
    )
}

export default Perfil;