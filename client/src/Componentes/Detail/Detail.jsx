import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";

const detalle = {
        "adult": false,
        "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity": 6120.418,
        "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 11355
      }

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#22272E'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    description: {
      width: 350,
      marginBottom: '1rem',
    },
    poster: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      objectFit: 'contain',
      width: '300px',
      height: '450px'
    }
  }));

export default function Detail(){
    const classes = useStyles();
    const theme = useTheme();
    return(
        <React.Fragment>
            <h2 style={{'color':'#f3f3f3', 'width':'100%', 'justifyContent':'center', 'textAlign':'center', 'padding': '10px 0px'}}> Detalle de la película</h2>
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h4" variant="h4" color="primary">
                        {detalle.title}
                    </Typography>
                    <Typography component='h5' variant="subtitle1" color="secondary">
                        {`Estreno : ${detalle.release_date}`}
                    </Typography>
                </CardContent>
                <div className={classes.poster}>
                <CardMedia 
                    component={`img`}
                    height="450"
                    width='300'
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2`+detalle.poster_path}
                    title={detalle.original_title}
                    />
                </div>
        </div>
      <CardContent className={classes.description}>
        <Typography component='h4' color="primary"> Sinopsis </Typography>
        <Typography variant="body1" color="secondary" component="p">
            {detalle.overview}<br></br>
        </Typography>
        <Typography component='h4' color="primary">Género</Typography>
        <Typography variant="body1" color="secondary" component="span">
            {detalle.genre_ids.map(g=>` ${g} `)}
        </Typography>
        <Typography component='h4' color="primary">Autores</Typography>
        <Typography variant="body1" color="secondary" component="span">
            Leonardo Di Caprio 
        </Typography>
        <br/><br/>
        <Link to= '/home' style={{'textDecoration':'none'}} >
            <Button variant="contained" color="primary">Volver</Button>
        </Link>
      </CardContent>
    </Card>
    </React.Fragment>
    );
//     return(
//     <div>
//         <div>
//             <h1>Nombre: {'The Batman'}</h1>
//             <h3>Estreno: {'Abril 2022'}</h3>
//             <br/>
//             <img  src='https://www.loslunesseriefilos.com/wp-content/uploads/2022/03/the-batman-traje.jpg' width='500' height='430' alt='not found'/>
//             <br />
//             <h2>Resumen: {'Probablemente, este es el mayor acierto de la película, que sigue al hombre murciélago en una trama detectivesca en la que Enigma va matando a distintos prohombres de Gotham en asesinatos con mucha escenografía, dejando en el camino pistas dirigidas a Batman para que le siga los talones y le ayude a descubrir el misterio.'}</h2>
//         </div>
//         <Link to= '/home' ><button>Volver</button> </Link>
//     </div>
// )
}