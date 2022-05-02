import React, { useState } from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from "react-redux";
import { newSucursal } from "./../../redux/actions";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ExitToAppOutlined, Save } from "@mui/icons-material";
import { Link } from "react-router-dom";

const stylePaper = {
  border: "1px solid gray",
  padding: 20,
  height: "auto",
  width: 600,
  margin: "20px auto",
};

export default function AddSucursal() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    pais: "",
    provincia: "",
    ciudad: "",
    direccion: "",
  });

  const handleChangeInput = async (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(newSucursal(input));
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
          Registrar Sucursal
        </Typography>
        <Paper style={stylePaper}>
          <Link to="/sucursales" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ExitToAppOutlined />}
              variant="outlined"
              color="secondary"
            >{`Cancelar & Regresar`}</Button>
          </Link>
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          <form onSubmit={handleSubmit}>
            <TextField
              label="País"
              size="small"
              name="pais"
              onChange={handleChangeInput}
              value={input.pais}
              sx={{ width: "49%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <TextField
              label="Provincia"
              size="small"
              name="provincia"
              onChange={handleChangeInput}
              value={input.provincia}
              sx={{ width: "49%" }}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="Ciudad"
              size="small"
              name="ciudad"
              onChange={handleChangeInput}
              value={input.ciudad}
              sx={{ width: "49%" }}
              style={{ marginBottom: 20, marginRight: 10 }}
            />
            <TextField
              label="Dirección"
              size="small"
              name="direccion"
              onChange={handleChangeInput}
              value={input.direccion}
              sx={{ width: "49%" }}
              style={{ marginBottom: 20 }}
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
