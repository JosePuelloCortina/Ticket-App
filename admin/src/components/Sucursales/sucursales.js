import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/navbar";
import { useDispatch, useSelector } from 'react-redux';
import { getSucursales } from "../../redux/actions";



export default function Sucursales(){

    const dispatch = useDispatch();
    const sucursales = useSelector(state => state.sucursales);

    useEffect(() => {
        dispatch(getSucursales());
    }, []);

    return(
        <div>
            <NavBar/>
            <Link to="/addSucursal">
                <button>Agregar sucursal</button>
            </Link>
            {
                sucursales?.map(s => {
                    return(
                        <div>
                            <h3>{s.pais}, {s.provincia}, {s.ciudad}</h3>
                            <h4>{s.direccion}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}