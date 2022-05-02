import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getSucursales, newTicket } from "../redux/actions";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Save } from "@mui/icons-material";

const stylePaper = {
  border: "1px solid gray",
  padding: 20,
  height: "auto",
  width: 600,
  margin: "20px auto",
};

export default function AddTickets() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    numero: "",
    fecha_hora: "",
    precio: 0,
    descuento: 0,
    numero_sala: "",
    peliculaId: "",
    sucursalId: "",
  });
  const movies = useSelector((state) => state.movies);
  const sucursales = useSelector((state) => state.sucursales);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getSucursales());
  }, []);

  const handleChangeInput = async (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  const handleChangeMovie = async (e) => {
    e.preventDefault();
    setInput({
      ...input,
      peliculaId: e.target.value,
    });
    console.log(input);
  };

  const handleChangeSucursal = async (e) => {
    e.preventDefault();
    setInput({
      ...input,
      sucursalId: e.target.value,
    });
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(newTicket(input));
  };

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
            paddingTop: "10px",
          }}
        >
          Agregar Tickets
        </Typography>
        <Paper style={stylePaper}>
          <form onSubmit={handleSubmit}>
            <FormControl
              sx={{ width: "49%" }}
              size="small"
              style={{ marginBottom: 20, marginRight: 10 }}
            >
              <InputLabel id="movie-select-small">Sucursal</InputLabel>
              <Select
                labelId="movie-select-small"
                id="movie-select-small"
                label="Sucursal"
                autoFocus
                value={input.sucursalId}
                onChange={handleChangeSucursal}
              >
                {sucursales?.map((s) => {
                  return (
                    <MenuItem key={s.id} value={s.id}>
                      {s.pais}, {s.provincia}, {s.ciudad}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "49%" }} size="small">
              <InputLabel id="demo-select-small">Película</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={input.peliculaId}
                label="Película"
                onChange={handleChangeMovie}
              >
                {movies?.map((m) => {
                  return (
                    <MenuItem key={m.id} value={m.id}>
                      {m.nombre}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              label="Número"
              size="small"
              name="numero"
              autoFocus
              onChange={handleChangeInput}
              value={input.numero}
              sx={{ width: "35%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <TextField
              type="datetime-local"
              label="Fecha y hora"
              size="small"
              name="fecha_hora"
              onChange={handleChangeInput}
              value={input.fecha_hora}
              sx={{ width: "35%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <TextField
              type="number"
              label="Precio"
              size="small"
              name="precio"
              onChange={handleChangeInput}
              value={input.precio}
              sx={{ width: "25%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <TextField
              type="number"
              label="Descuento"
              size="small"
              name="descuento"
              onChange={handleChangeInput}
              value={input.descuento}
              sx={{ width: "25%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <TextField
              label="Número de sala"
              size="small"
              name="numero_sala"
              onChange={handleChangeInput}
              value={input.numero_sala}
              sx={{ width: "25%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <Button
              startIcon={<Save />}
              variant="contained"
              color="primary"
              type="submit"
            >
              GUARDAR
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
