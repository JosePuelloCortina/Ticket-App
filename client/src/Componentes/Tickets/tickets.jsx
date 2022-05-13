import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "./../../redux/actions/index";


export default function () {
    //const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch();
    const tickets = useSelector((state) => state.tickets);
    const user = useSelector((state) => state.userInfo);

    useEffect(() => {
      dispatch(getTickets(id));
    }, [dispatch, id]);

    return(
        <div>
        {
            user?.tickets?(
                <div>
                <h3>Numero  Tickets: {tickets.numero}</h3>
                <h3>Fecha y Hora: {tickets.fecha_hora}</h3>
                <h3>Precio: {tickets.precio}</h3>
                <h3>Descuento: {tickets.descuento}</h3>
                <h3>Sala: {tickets.numero_sala}</h3>
                <h3>Usuario: {tickets.userId}</h3>
                <h3>Pelicula: {tickets.peliculaId}</h3>
                <h3>Sucursal: {tickets.sucursalId}</h3>
            
                    </div>
            ):(<h3>...</h3>)
        }
        <Link to='/perfil'>
                        <button>VOLVER</button>
                    </Link>
        </div>
    )
}