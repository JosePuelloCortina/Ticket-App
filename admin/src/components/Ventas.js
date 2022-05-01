import React, { useEffect } from "react";
import NavBar from './NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getVentas } from "../redux/actions";
import { useSelector } from 'react-redux';



export default function Ventas(){

    const dispatch = useDispatch();
    const ventas = useSelector(state => state.ventas)

    useEffect(() => {
        dispatch(getVentas());
    }, [])


    return(
        <div>
            <NavBar/>
            {
                ventas?.map(v => {
                    return(
                        <div>
                            <label>Email del comprador</label>
                            <h3>{v.comprador_email}</h3>
                            <label>Precio de compra</label>
                            <h3>${v.amount} USD</h3>
                            <label>Cantidad de tickets</label>
                            <h3>{v.cantidad_tickets}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
