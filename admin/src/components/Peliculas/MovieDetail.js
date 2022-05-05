import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, getMovieDetail } from "./../../redux/actions";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExitToAppOutlined, UpdateOutlined } from "@mui/icons-material";

const stylePaper = {
  border: "1px solid gray",
  padding: "20px",
  height: "auto",
  width: 600,
  margin: "0px auto",
};

export default function UserDetail() {
  const { id } = useParams();
  const movie = useSelector((state) => state.movieDetail);

  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  useEffect(() => {
    setInput(movie);
  }, [movie]);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editMovie(id, input));
  }

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Grid>
        <Typography
          fontSize={40}
          style={{
            width: "100%",
            textAlign: "center",
            color: "gray",
            padding: "10px 0px",
          }}
        >
          Detalle de la Película
        </Typography>
        <Paper style={stylePaper}>
          <Link to="/peliculas" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ExitToAppOutlined />}
              variant="outlined"
              color="secondary"
            >{`Cancelar & Regresar`}</Button>
          </Link>
          <Divider style={{ marginTop: 16 }} />
          <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
            <TextField
              label="Pelicula"
              size="small"
              name="nombre"
              fullWidth
              autoFocus
              onChange={handleChangeInput}
              value={input.nombre || ""}
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
                  name="descripcion"
                  fullWidth
                  multiline
                  rows={10}
                  onChange={handleChangeInput}
                  value={input.descripcion}
                />
              </div>
            </div>
            <TextField
              type={`date`}
              label="Fecha lanzamiento"
              size="small"
              name="fecha"
              onChange={handleChangeInput}
              value={input.fecha}
              style={{ marginBottom: 16, marginRight: 10 }}
              sx={{ width: "32%" }}
            />
            <TextField
              type={`number`}
              label="Duración"
              size="small"
              name="duracion"
              onChange={handleChangeInput}
              value={input.duracion}
              style={{ marginRight: 10 }}
              sx={{ width: "32%" }}
            />
            <TextField
              type={`date`}
              label="Estreno"
              size="small"
              name="estreno"
              onChange={handleChangeInput}
              value={input.estreno}
              sx={{ width: "32%" }}
            />
            <TextField
              label="Link trailer"
              size="small"
              name="trailer"
              fullWidth
              onChange={handleChangeInput}
              value={input.trailer}
              style={{ marginBottom: 16 }}
            />
            <Typography>
              Categorías :
              {movie.Categoria?.map((c, i) => (
                <b key={i}>{` ${c.nombre} `}</b>
              ))}
            </Typography>
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
