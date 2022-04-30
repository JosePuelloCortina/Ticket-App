import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(input.email, input.password));
    navigate("/home");
  }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#5ED5A8", marginTop: "1rem" }}>
            <LockOutlined />
          </Avatar>
          <br />
          <h2 style={{ margin: "20px 0px" }}>
            Admin
            <br />
            Iniciar Sesión
          </h2>
          <br />
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ marginBottom: "16px" }}
              label={`Correo Electrónico`}
              placeholder={`Introduzca su correo electrónico`}
              fullWidth
              size="small"
              required
              onChange={handleChange}
              name="email"
            />
            <TextField
              style={{ marginBottom: "16px" }}
              type={`password`}
              label={`Contraseña`}
              placeholder={`Introduzca su contraseña`}
              fullWidth
              size="small"
              required
              onChange={handleChange}
              name="password"
            />
            <Button
              style={{ margin: "16px 0px" }}
              fullWidth
              variant="contained"
              disableElevation
              type="submit"
            >
              Ingresar
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}
