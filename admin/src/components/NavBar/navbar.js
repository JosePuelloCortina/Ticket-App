import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./../../redux/actions";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function NavBar() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }

  const styleText = {
    textDecoration: "none",
    color: "inherit",
    marginRight: "1rem",
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#373E47" }} position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ marginRight: "2rem" }}>
            <b>Cinem</b>
            <span style={{ color: "#5ED5A8" }}>
              <b>App</b>
            </span>
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Link to="/home" style={styleText}>
              HOME
            </Link>
            <Link to="/users" style={styleText}>
              USUARIOS
            </Link>
            <Link to="/admins" style={styleText}>
              ADMINS
            </Link>
            <Link to="/peliculas" style={styleText}>
              PELICULAS
            </Link>
            <Link to="/categorias" style={styleText}>
              CATEGORIAS
            </Link>
          </Box>
          <Avatar sx={{ marginLeft: "auto" }}>
            <LockOutlined
              onClick={handleLogOut}
              style={{ cursor: "pointer" }}
            />
          </Avatar>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
