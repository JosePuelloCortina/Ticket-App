import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, getMovieDetail } from "./../../redux/actions";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ExitToAppOutlined, UpdateOutlined } from "@mui/icons-material";

export default function UserDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  const [input, setInput] = useState({
    nombre: "",
    fecha: "",
    duracion: "",
    descripcion: "",
    trailer: "",
    estreno: "",
  });

  function handleChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editMovie(id, input));
  }

  const stylePaper = {
    border: "1px solid gray",
    padding: "20px",
    height: "auto",
    width: 600,
    margin: "0px auto",
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Grid>
        <h2 style={{ width: "100%", textAlign: "center", color: "gray" }}>
          Detalle de la Película
        </h2>
        <Paper style={stylePaper}>
          <Link to="/peliculas" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ExitToAppOutlined />}
              variant="outlined"
              color="secondary"
            >{`Cancelar & Regresar`}</Button>
          </Link>
          <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
            <TextField
              label="Pelicula"
              size="small"
              fullWidth
              onChange={handleChangeInput}
              name="nombre"
              autoFocus
              placeholder={movie.nombre}
              style={{ marginBottom: "16px" }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <img
                src={movie.image}
                width="170px"
                height="250px"
                alt=""
                style={{ borderRadius: 6 }}
              />
              <div style={{ width: "419px" }}>
                <TextField
                  label="Descripción"
                  size="small"
                  fullWidth
                  multiline
                  rows={10}
                  value={movie?.descripcion}
                  onChange={handleChangeInput}
                  name="descripcion"
                />
              </div>
            </div>
            <TextField
              type={`date`}
              label="Fecha lanzamiento"
              size="small"
              value={movie.fecha}
              onChange={handleChangeInput}
              name="fecha"
              placeholder={movie.fecha}
              style={{ marginBottom: 16, marginRight: 10 }}
            />
            <TextField
              type={`number`}
              label="Duración"
              size="small"
              value={movie.duracion}
              onChange={handleChangeInput}
              name="duracion"
              placeholder={movie.duracion}
            />
            <TextField
              label="Link trailer"
              size="small"
              fullWidth
              value={movie.trailer}
              onChange={handleChangeInput}
              name="trailer"
              placeholder={movie.trailer}
              style={{ marginBottom: 16 }}
            />
            <TextField
              type={`date`}
              label="Estreno"
              size="small"
              value={movie.estreno}
              onChange={handleChangeInput}
              name="estreno"
              style={{ marginRight: 10 }}
            />
            <label>
              Categorías :
              {movie.Categoria?.map((c, i) => (
                <b key={i}>{` ${c.nombre} `}</b>
              ))}
            </label>
            <div style={{ width: "100%" }}>
              <Button
                startIcon={<UpdateOutlined />}
                style={{ marginTop: 16 }}
                variant="contained"
                color="primary"
                disableElevation
                type={"submit"}
              >
                Subir Cambios
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
