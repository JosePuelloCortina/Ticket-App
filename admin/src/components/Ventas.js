import React, { useEffect } from "react";
import NavBar from "./NavBar/navbar";
import { useDispatch } from "react-redux";
import { getVentas } from "../redux/actions";
import { useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

const columns = [
  {
    id: "comprador_email",
    label: "Email\u00a0del\u00a0Comprador",
    minWidth: 270,
  },
  {
    id: "amount",
    label: "Precio\u00a0de\u00a0compra",
    minWidth: 100,
    align: "right",
  },
  {
    id: "cantidad_tickets",
    label: "Cantidad",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const stylePaper = {
  border: "1px solid gray",
  padding: 20,
  height: "auto",
  width: 800,
  margin: "20px auto",
};

export default function Ventas() {
  const dispatch = useDispatch();
  const ventas = useSelector((state) => state.ventas);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(getVentas());
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
            paddingTop: "10px",
          }}
        >
          Ventas
        </Typography>
        <Paper style={stylePaper}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        sx={{ backgroundColor: "#f3f3f3" }}
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography>
                          <b>{column.label}</b>
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ventas
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <Typography>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </Typography>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={ventas ? ventas.length : 1}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Paper>
      </Grid>
    </div>
  );
}
