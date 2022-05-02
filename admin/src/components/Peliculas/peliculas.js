import React, { useEffect } from "react";
import NavBar from "./../NavBar/navbar";
import { useDispatch } from "react-redux";
import { getMovies } from "./../../redux/actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteElement } from "./../../redux/actions";
import { Button, Divider, Grid, List, Paper, Typography } from "@mui/material";
import CardMovie from "./CardMovie";
import { AddCardOutlined } from "@mui/icons-material";

const stylePaper = {
  border: "1px solid gray",
  padding: 20,
  height: "auto",
  width: 800,
  margin: "20px auto",
};

export default function Peliculas() {
  const dispatch = useDispatch();

  const elementos = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteElement("movies", id));
  }

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <NavBar />
      <Grid>
        <Typography
          fontSize={40}
          style={{
            width: "100%",
            textAlign: "center",
            color: "gray",
            marginTop: 10,
          }}
        >
          Administrar Películas
        </Typography>
        <Paper style={stylePaper}>
          <Link
            to="/movies/add"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCardOutlined />}
              disableElevation
            >
              Agregar Película
            </Button>
          </Link>
          <Divider style={{ marginTop: 10 }} />
          <List sx={{ width: "100%" }}>
            {elementos?.map((el) => (
              <CardMovie
                key={el.id}
                id={el.id}
                image={el.image}
                nombre={el.nombre}
                estreno={el.estreno}
                descripcion={el.descripcion}
                handleDelete={handleDelete}
              />
            ))}
          </List>
        </Paper>
      </Grid>
    </div>
  );
}
