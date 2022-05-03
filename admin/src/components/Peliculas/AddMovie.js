import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from "react-redux";
import { getCategories, newMovie } from "../../redux/actions";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(categ, categName, theme) {
  return {
    fontWeight:
      categName.indexOf(categ) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const stylePaper = {
  border: "1px solid gray",
  padding: 20,
  height: "auto",
  width: 600,
  margin: "20px auto",
};

export default function AddMovie() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const inicialForm = {
    nombre: "",
    fecha: "",
    image: "",
    duracion: "",
    descripcion: "",
    trailer: "",
    estreno: "",
    puntuacion: "",
    categorias: [],
  };

  const categorias = useSelector((state) => state.categories);
  const [input, setInput] = useState(inicialForm);
  const [catgName, setCatgName] = useState([]);
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setCatgName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setInput({
      ...input,
      categorias: value,
    });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function handleChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(newMovie(input));
    setInput(inicialForm);
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
            paddingTop: "10px",
          }}
        >
          Registrar Película
        </Typography>
        <Paper style={stylePaper}>
          <form onSubmit={handleSubmit}>
            <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <TextField
                label="Película"
                placeholder="Nombre de la película"
                size="small"
                fullWidth
                value={input.nombre}
                onChange={handleChangeInput}
                name="nombre"
              />
              <TextField
                type={`date`}
                label={`Lanzamiento`}
                placeholder={`Fecha de la lanzamiento`}
                size="small"
                value={input.fecha}
                onChange={handleChangeInput}
                name="fecha"
              />
              <TextField
                type={`number`}
                label={`Duración`}
                placeholder={`En minutos`}
                size="small"
                value={input.duracion}
                onChange={handleChangeInput}
                name="duracion"
              />

              <TextField
                type={`date`}
                label={`Estreno`}
                size="small"
                value={input.estreno}
                onChange={handleChangeInput}
                name="estreno"
              />
              <TextField
                type={`number`}
                label={`Puntuación`}
                placeholder={`Entre 1 y 100`}
                size="small"
                value={input.puntuacion}
                onChange={handleChangeInput}
                name="puntuacion"
              />
              <TextField
                label={`Poster`}
                placeholder={`URL poster de la película`}
                size="small"
                fullWidth
                value={input.image}
                onChange={handleChangeInput}
                name="image"
              />
              <TextField
                label={`Trailer`}
                placeholder={`URL del trailer oficial`}
                size="small"
                fullWidth
                value={input.trailer}
                onChange={handleChangeInput}
                name="trailer"
              />
              <TextField
                label={`Descripción`}
                placeholder={`Breve reseña de la película`}
                size="small"
                multiline
                fullWidth
                value={input.descripcion}
                onChange={handleChangeInput}
                name="descripcion"
              />
            </section>
            <section>
              <FormControl sx={{ marginTop: "1rem", width: "100%" }}>
                <InputLabel id="demo-multiple-label">Categorías</InputLabel>
                <Select
                  labelId="demo-multiple-label"
                  id="demo-multiple-chip"
                  multiple
                  value={catgName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Categorías"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {categorias.map((catg) => (
                    <MenuItem
                      key={catg.id}
                      value={catg.nombre}
                      style={getStyles(catg, catgName, theme)}
                    >
                      {catg.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </section>
            <div style={{ marginTop: "1rem", width: "100%" }}>
              <Button
                style={{ marginRight: "1rem" }}
                startIcon={<Save />}
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
              >
                Guardar
              </Button>
              <Link
                to={`/peliculas`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="outlined" color="secondary" disableElevation>
                  {`Cancelar & Salir`}
                </Button>
              </Link>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
