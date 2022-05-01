import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    width: "260px",
    height: "500px",
    opacity: 1,
    display: 'block',
    flexBasis: 0,
    webkitBoxFlex: 1,
    flexGrow: 1,
    flexShrink: 1,
    boxSizing: 'inherit',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // backgroundColor: '#373E47',
    backgroundColor: '#FFF'
  },
  formatImg: {
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
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Link to={`/${id}`} className={classes.movieItem}>
          <CardActionArea className={classes.container}>
            <figure className={classes.movie}>
              <CardMedia className={classes.formatImg}
                component="img"
                height={360}
                image={poster_path}
                alt={original_title}
              />
            </figure>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {original_title}
              </Typography>
              <Typography variant="body2" color="secondary">
                Genero:{" "}
                {/* {categoria.map((c, i) => (
                  <span key={i} >{c} </span>
                ))} */}
              </Typography>
              <Typography variant="body2" color="secondary" component="p">
                Estreno: {release_date}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
    </Card>
    </div>
  );
}
