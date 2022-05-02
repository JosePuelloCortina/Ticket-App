import React, { useEffect } from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteElement } from "./../../redux/actions";
import { makeAdmin } from "../../redux/actions";
import { Avatar, Button, Grid, List, ListItem, Paper } from "@mui/material";
import {
  AccountCircle,
  Delete,
  Edit,
  ManageAccounts,
} from "@mui/icons-material";

export default function Usuarios() {
  const dispatch = useDispatch();

  const elementos = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteElement("user", id));
  }

  function handleMakeAdmin(e, nombre, apellido, email, password) {
    e.preventDefault();
    const user = {
      nombre,
      apellido,
      email,
      password,
    };
    dispatch(makeAdmin(user));
  }

  const stylePaper = {
    border: "1px solid gray",
    padding: 20,
    height: "auto",
    width: 800,
    margin: "20px auto",
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <NavBar />
      <Grid>
        <h2 style={{ width: "100%", textAlign: "center", color: "gray" }}>
          Gestionar Usuarios
        </h2>
        <Paper style={stylePaper}>
          <List>
            {elementos?.map((el) => {
              return (
                <ListItem key={el.id}>
                  <Avatar>
                    <AccountCircle />
                  </Avatar>
                  <h2 style={{ padding: "0px 10px" }}>
                    {` ${el.nombre} ${el.apellido}`}
                  </h2>
                  <Link
                    to={`/user/${el.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      startIcon={<Edit />}
                      size="small"
                      variant="outlined"
                      style={{ margin: "0px 10px" }}
                    >
                      Editar
                    </Button>
                  </Link>
                  <Button
                    startIcon={<Delete />}
                    size="small"
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    onClick={(e) => handleDelete(e, el.id)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    startIcon={<ManageAccounts />}
                    size="small"
                    variant="outlined"
                    onClick={(e) =>
                      handleMakeAdmin(
                        e,
                        el.nombre,
                        el.apellido,
                        el.email,
                        el.password
                      )
                    }
                  >
                    Hacer admin
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </div>
  );
}
