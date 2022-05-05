import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUserDetail } from "./../../redux/actions";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ExitToAppOutlined, Update } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
  const user = useSelector((state) => state.userDetail);
  const [input, setInput] = useState({});

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);

  useEffect(() => {
    setInput(user);
  }, [user]);

  function handleChangeEstadoFalse(e) {
    e.preventDefault();
    setInput({
      ...input,
      estado: false,
    });
    console.log(input);
  }

  function handleChangeEstadoTrue(e) {
    e.preventDefault();
    setInput({
      ...input,
      estado: true,
    });
    console.log(input);
  }

  function handleChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editUser(id, input));
    setInput({
      nombre: "",
      apellido: "",
      email: "",
      estado: true,
    });
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
          Datos del Usuario
        </Typography>
        <Paper style={stylePaper}>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ExitToAppOutlined />}
              variant="outlined"
              color="secondary"
            >{`Cancelar & Regresar`}</Button>
          </Link>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre(s)"
              size="small"
              name="nombre"
              autoFocus
              onChange={handleChangeInput}
              value={input.nombre}
              placeholder={user?.nombre}
              sx={{ width: "49%" }}
              style={{ margin: "16px 10px 16px 0px" }}
            />
            <TextField
              label="Apellido(s)"
              size="small"
              name="apellido"
              onChange={handleChangeInput}
              value={input.apellido}
              placeholder={user?.apellido}
              sx={{ width: "49%" }}
              style={{ margin: "16px 0px 16px 0px" }}
            />
            <TextField
              label="Dirección email"
              size="small"
              name="email"
              fullWidth
              onChange={handleChangeInput}
              value={input.email}
              placeholder={user?.email}
              style={{ marginBottom: 16 }}
            />
            {input?.estado === true ? (
              <h3>{`Estado: True`}</h3>
            ) : (
              <h3>{`Estado: False`}</h3>
            )}
            <Button
              style={{ marginRight: 10 }}
              variant="outlined"
              onClick={handleChangeEstadoFalse}
            >
              set Estado to False
            </Button>
            <Button variant="outlined" onClick={handleChangeEstadoTrue}>
              set Estado to True
            </Button>
            {user?.tickets?.map((t, i) => {
              return <h2 key={i}>{t.precio}</h2>;
            })}
            <Button startIcon={<Update />} variant="contained" type={"submit"}>
              Subir Cambios
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
