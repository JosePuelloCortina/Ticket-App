import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
                        <img className={classes.image} src='https://img2.freepng.es/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg' />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography component="h5" variant="h5" color="primary">
                            {'nombre'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography component='h5' variant="subtitle1" color="secondary">
                            {'Apellido'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component='h5' variant="subtitle1" color="secondary">
                            {'Email'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component='h4' color="primary">Estado</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography component='h4' color="primary">Tikets</Typography>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )


}

export default Perfil;