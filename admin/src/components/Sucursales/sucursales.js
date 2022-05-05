import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getSucursales } from "../../redux/actions";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { AddCardOutlined } from "@mui/icons-material";

const stylePaper = {
  border: "1px solid gray",
  padding: 20,
  height: "auto",
  width: 800,
  margin: "20px auto",
};

export default function Sucursales() {
  const dispatch = useDispatch();
  const sucursales = useSelector((state) => state.sucursales);

  useEffect(() => {
    dispatch(getSucursales());
  }, []);

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
            marginTop: 10,
          }}
        >
          Administrar Sucursales
        </Typography>
        <Paper style={stylePaper}>
          <Link
            to="/addSucursal"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              startIcon={<AddCardOutlined />}
              variant="contained"
              color="primary"
            >
              Agregar sucursal
            </Button>
          </Link>
          <Divider style={{ marginTop: 10 }} />

          {sucursales?.map((s) => {
            return (
              <div key={s.id}>
                <h3>
                  {s.pais}, {s.provincia}, {s.ciudad}
                </h3>
                <h4>{s.direccion}</h4>
                <Divider />
              </div>
            );
          })}
        </Paper>
      </Grid>
    </div>
  );
}
