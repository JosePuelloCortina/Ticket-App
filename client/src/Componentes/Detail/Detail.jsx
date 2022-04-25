import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { moviesDetail } from './../../redux/actions/index';
import { Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22272E",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  description: {
    width: 350,
    marginBottom: "1rem",
  },
  poster: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    objectFit: "contain",
    width: "300px",
    height: "450px",
  },
}));

export default function Detail(){
    const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    const detalle = useSelector((state)=>state.detail.data)

  useEffect(() => {
    dispatch(moviesDetail(id));
  }, [dispatch, id]);

    return(
        <React.Fragment>
            <h2 style={{'color':'#f3f3f3', 'width':'100%', 'justifyContent':'center', 'textAlign':'center', 'padding': '10px 0px'}}> Detalle de la película</h2>
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h4" variant="h4" color="primary">
                        {detalle?.nombre}
                    </Typography>
                    <Typography component='h5' variant="subtitle1" color="secondary">
                        {`Estreno : ${detalle?.fecha}`}
                    </Typography>
                </CardContent>
                <div className={classes.image}>
                  <CardMedia 
                      component={`img`}
                      height="450"
                      width='300'
                      image={detalle?.image}
                      title={detalle?.original_title}
                      />
                </div>
             </div>
        <CardContent className={classes.description}>
          <Typography component="h4" color="primary">
            {" "}
            Sinopsis{" "}
          </Typography>
          <Typography variant="body1" color="secondary" component="p">
            {detalle?.descripcion}
            <br></br>
          </Typography>
          <Typography component="h4" color="primary">
            Género
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            component="span"
          ></Typography>
          <Typography component="h4" color="primary">
            Autores
          </Typography>
          <Typography variant="body1" color="secondary" component="span">
            Leonardo Di Caprio
          </Typography>
          <br />
          <br />
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Volver
            </Button>
          </Link>
          <Link to={`/stripe/${id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Obtener Ticket
            </Button>
          </Link>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
