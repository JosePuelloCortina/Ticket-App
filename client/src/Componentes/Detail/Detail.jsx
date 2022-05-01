import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { moviesDetail } from "./../../redux/actions/index";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Reproductor from "../Reproductor/Reproductor";

const useStyles = makeStyles((theme) => ({
  poster: {
    display: "block",
    minWidth: "300px",
    width: "300px",
    height: "450px",
    position: "relative",
    top: 0,
    left: 0,
    boxSizing: "border-box",
  },
  container: {
    margin: 0,
    padding: 0,
    borderBottom: "1px solid rgba(52.5, 10.5, 10.5, 1)",
    width: "100%",
    position: "relative",
    zIndex: 1,
    display: "block",
    boxSizing: "border-box",
    backgroundColor: "#22272E",
  },
  custon_bg: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    boxSizing: "border-box",
  },
  single_column: {
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "40px",
    paddingRight: "40px",
    maxWidth: "1400px",
    width: "100%",
    zIndex: 0,
    boxSizing: "border-box",
  },
  images_inner: {
    color: "#fff",
    display: "flex",
    flexWrap: "nowrap",
  },
  poster_wrapper: {
    height: "auto",
    color: "#FFF",
    borderWidth: "0px",
    minWidth: "300px",
    width: "300px",
    overflow: "hidden",
    borderRadius: "8px",
    boxSizing: "border-box",
    display: "block",
  },
  header_poster: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "center",
    boxSizing: "border-box",
    paddingLeft: "40px",
  },
  title_movie: {
    width: "100%",
    marginBottom: "24px",
    display: "flex",
    flexWrap: "wrap",
  },
  style_title: {
    width: "100%",
    margin: 0,
    padding: 0,
    fontSize: "2.2rem",
    boxSizing: "border-box",
    display: "block",
    fontWeight: 600,
    marginBlockEnd: "0.83em",
    marginBlockStart: "0em",
  },
  auto_actions: {
    marginBottom: "20px",
    width: "100%",
    height: "68px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    listStyle: "none",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",
  },
  botones: {
    marginTop: "20px",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    listStylePosition: "inside",
    margin: 0,
    padding: 0,
    display: "flex",
    position: "relative",
    top: 0,
    left: 0,
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
  style_botones: {
    width: "auto",
    textAlign: "left",
    marginBottom: "14px",
    marginRight: 0,
    boxSizing: "border-box",
    paddingRight: "20px",
  },
  video: {
    textAlign: "-webkit-match-parent",
    border: "none",
    background: "transparent",
    width: "auto",
    height: "auto",
    fontWeight: 600,
    willChange: "opacity",
    transition: "linear .1s",
    boxSizing: "border-box",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
}));

export default function Detail() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detail.data);

  useEffect(() => {
    dispatch(moviesDetail(id));
  }, [dispatch, id]);

  return (
    <div className={classes.container}>
      <div className={classes.custon_bg}>
        <div className={classes.single_column}>
          <section className={classes.images_inner}>
            <div className={classes.poster_wrapper}>
              <div className={classes.poster}>
                <img src={detalle?.image} width={300} height={450} alt="" />
              </div>
            </div>
            <div style={{ display: "flex", color: "#FFF" }}>
              <section className={classes.header_poster}>
                <div className={classes.title_movie}>
                  <h2 className={classes.style_title}>
                    {detalle?.nombre}
                    <span
                      style={{
                        paddingLeft: 10,
                        fontWeight: 400,
                        color: "#FFF",
                      }}
                    >
                      {`(${detalle?.fecha})`}
                    </span>
                  </h2>
                  <div>
                    <h4>{`Generos:  `}
                      {detalle?.Categoria?.map(c=>{
                        return (<span key={c.id} style={{marginRight:8}}>{c.nombre}</span>)
                      })}
                    </h4>
                    <span>{`Duracion: ${Math.floor(detalle?.duracion/60)}h : ${detalle?.duracion % 60}min`}</span>
                  </div>
                </div>
                <div className={classes.header_info}>
                  <h3 style={{marginTop:'10px', width:'100%', fontWeight:600, fontSize:'1.3em'}}>Sinopsis</h3>
                  <div>
                    <Typography component={`p`}>{detalle?.descripcion}</Typography>
                  </div>
                  <ol className={classes.botones}>
                      <li className={classes.style_botones}>
                        <Link to="/home" style={{ textDecoration: "none" }}>
                          <Button variant="contained" color="secondary" disableElevation size="large">Volver</Button>
                        </Link>
                      </li>
                      <li className={classes.style_botones}>
                        <Link to={`/stripe/${id}`} style={{ textDecoration: "none" }}>
                          <Button variant="contained" color="primary" disableElevation size="large">Obtener Ticket</Button>
                        </Link>
                      </li>
                    </ol>
                </div>
              </section>
            </div>
          </section>
          <section>
            <h3 style={{color:'#fff', marginTop:'1.5rem', width:'100%'}}>Trailer oficial</h3>
            <Reproductor videoURL = {detalle?.trailer} />
          </section>
        </div>
      </div>
    </div>
  );
}
