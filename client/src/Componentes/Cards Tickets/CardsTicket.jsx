import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "260px",
    height: "500px",
    // opacity: 1,
    // display: 'block',
    // flexBasis: 0,
    // webkitBoxFlex: 1,
    // flexGrow: 1,
    // flexShrink: 1,
    boxSizing: 'inherit',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  formatImg: {
    // height: '100%',
    // width: '100%',
    objectFit: 'cover',
    minWidth: '100%',
    maxWidth: '100%',
    // aspectRatio: 'auto 234 / 350',
    boxSizing: 'inherit',
    lineHeight: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,  
    backgroundColor: "#373E47",
    margin:0,
  },
  movie: {
    position: 'relative',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
    lineHeight: 0,
    margin: 0,
    display: 'block',
    color: '#000',
    padding: 0,
    boxSizing: 'inherit',
  },
  movieItem:{
    display: 'flex',
    webkitBoxAlign: 'start',
    alignItems: 'flex-start',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxSizing: 'inherit',
  },
  container:{
    position: 'relative',
    width: '100%',
    display: 'block',
    boxSizing: 'inherit',
  }
});

export default function CardTicket({
  poster_path,
  original_title,
  release_date,
  categoria,
  trailer,
  id,
}) {

  console.log(original_title)
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Link to={`/${id}`} className={classes.movieItem}>
          <CardActionArea className={classes.container}>
            <figure className={classes.movie}>
              <CardMedia className={classes.formatImg}
                component="img"
                image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                alt={original_title}
              />
            </figure>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {original_title}
              </Typography>
              <Typography variant="body2" color="secondary">
                Genero:{" "}
                {categoria.map((c, i) => (
                  <span key={i} >{c} </span>
                ))}
              </Typography>
              <Typography variant="body2" color="secondary" component="p">
                Estreno: {release_date}
              </Typography>
            </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
      </Link>
    </Card>
      {/* <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.formatImg}
            component={`img`}
            // height="280"
            // image={poster_path}
            image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
            title={original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {original_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Genero:{" "}
              {categoria.map((c, i) => (
                <span key={i} >{c} </span>
              ))}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Estreno: {release_date}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Link to={"/" + id} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              disableElevation
              color="primary"
            >
              Mas detalles
            </Button>
          </Link>
        </CardActions>
      </Card> */}

      {/* <iframe width="420" height="345" src={trailer}></iframe> */}
    </div>
  );
}
