import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import {
  LockOutlined,
  LoginOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 280,
  margin: "20px auto",
  backgroundColor: "#f1f1f1",
};

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setInput({
      ...input,
      [prop]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setInput({
      ...input,
      showPassword: !input.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(input.email, input.password));
    navigate("/home");
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#5ED5A8", marginTop: "1rem" }}>
            <LockOutlined />
          </Avatar>
          <Typography
            sx={{ marginBottom: "2rem", marginTop: "1.5rem", fontSize: 25 }}
          >
            Admin
            <br />
            Iniciar Sesión
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "1.5rem",
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              <InputLabel htmlFor="outlined-adornment-email">
                Correo electrónico
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                value={input.email}
                placeholder={`Introduzca su correo electrónico`}
                onChange={handleChange("email")}
                fullWidth
                name="email"
                label="Correo electrónico"
                required
              />
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "1.5rem",
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={input.showPassword ? "text" : "password"}
                value={input.password}
                onChange={handleChange("password")}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {input.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
                required
              />
            </FormControl>
            <Button
              sx={{ marginBottom: "1.5rem" }}
              fullWidth
              size="large"
              variant="contained"
              disableElevation
              type="submit"
              endIcon={<LoginOutlined />}
            >
              Ingresar
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}
