import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editAdmin, getAdminDetail } from "./../../redux/actions";
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

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminDetail);
  const [input, setInput] = useState({});

  useEffect(() => {
    dispatch(getAdminDetail(id));
  }, []);

  useEffect(() => {
    setInput(admin);
  }, [admin]);

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editAdmin(id, input));
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
          Datos del Administrador
        </Typography>
        <Paper style={stylePaper}>
          <Link to="/admins" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ExitToAppOutlined />}
              variant="outlined"
              color="secondary"
            >{`Cancelar & Regresar`}</Button>
          </Link>
          <Divider style={{ marginTop: 10 }} />
          <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
            <TextField
              label="Nombre(s)"
              name="nombre"
              size="small"
              autoFocus
              onChange={handleChangeInput}
              value={input.nombre}
              placeholder={input.nombre}
              sx={{ width: "49%" }}
              style={{ marginBottom: 16, marginRight: 10 }}
            />
            <TextField
              label="Apellido(s)"
              size="small"
              name="apellido"
              onChange={handleChangeInput}
              value={input.apellido}
              placeholder={input.apellido}
              sx={{ width: "49%" }}
            />
            <TextField
              type={`email`}
              label="Dirección email"
              size="small"
              name="email"
              fullWidth
              onChange={handleChangeInput}
              value={input.email}
              placeholder={input.email}
              style={{ marginBottom: 16, marginRight: 10 }}
            />
            <Button
              startIcon={<UpdateOutlined />}
              variant="contained"
              color="primary"
              disableElevation
              type={"submit"}
            >
              Subir Cambios
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
