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
    width: "280px",
    height: "470px",
  },
  formatImg: {
    width: "280px",
    objectFit: "fill",
    backgroundColor: "#373E47",
  },
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
        <CardActionArea>
          <CardMedia
            className={classes.formatImg}
            component={`img`}
            height="280"
            image={poster_path}
            title={original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {original_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Genero:{" "}
              {categoria.map((c) => (
                <span>{c.nombre} </span>
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
      </Card>

      <iframe width="420" height="345" src={trailer}></iframe>
    </div>
  );
}
