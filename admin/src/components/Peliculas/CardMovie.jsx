import React from "react";
import { Button, Divider, ListItem, ListItemText } from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

function CardMovie({ id, image, nombre, estreno, descripcion, handleDelete }) {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <div style={{ marginRight: "1rem" }}>
          <img src={image} width="170px" height="250px" alt="" />
        </div>
        <ListItemText
          primary={<h3>{nombre}</h3>}
          secondary={
            <React.Fragment>
              <b>{`Estreno : ${estreno}`}</b>
              <br />
              {descripcion}
              <br />
              <Link
                to={`/movies/${id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  style={{ marginTop: "10px", marginRight: "1rem" }}
                  startIcon={<Edit />}
                  size="small"
                  variant="outlined"
                >
                  Editar
                </Button>
              </Link>
              <Button
                style={{ marginTop: "10px" }}
                size="small"
                startIcon={<DeleteOutline />}
                variant="outlined"
                onClick={(e) => handleDelete(e, id)}
              >
                Eliminar
              </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}

export default CardMovie;
