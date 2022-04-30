import React, { useEffect } from "react";
import NavBar from "./../NavBar/navbar";
import { useDispatch } from "react-redux";
import { getAdmins } from "./../../redux/actions";
import { useSelector } from "react-redux";
import { deleteElement } from "./../../redux/actions";
import { Link } from "react-router-dom";
import { Avatar, Button, Grid, List, ListItem, Paper } from "@mui/material";
import { AccountCircle, Delete, Edit } from "@mui/icons-material";

export default function Admins() {
  const dispatch = useDispatch();

  const elementos = useSelector((state) => state.admins);

  useEffect(() => {
    dispatch(getAdmins());
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteElement("admin", id));
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
          Gestionar Administradores
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
                    to={`/admin/${el.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      startIcon={<Edit />}
                      variant="outlined"
                      size="small"
                      style={{ margin: "10px 10px" }}
                    >
                      Editar
                    </Button>
                  </Link>
                  <Button
                    startIcon={<Delete />}
                    variant="outlined"
                    size="small"
                    onClick={(e) => handleDelete(e, el.id)}
                  >
                    Eliminar
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
