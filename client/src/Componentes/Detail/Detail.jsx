import React from "react";
import { Link } from "react-router-dom";

export default function Detail(){

return(
    <div>
        <div>
            <h1>Nombre: {nombre}</h1>
            <h3>Estreno: {estreno}</h3>
            <h4>Fecha:{fecha}</h4>
            <br/>
            <img  src='https://www.loslunesseriefilos.com/wp-content/uploads/2022/03/the-batman-traje.jpg' width='500' height='430' alt='not found'/>
            <br />
            <h4>Descripcion: {descripcion}</h4>
            <h4>Duracuion:{duracion}</h4>
            <h4>Trailer:{trailer}</h4>
            <h4>Puntiacion:{puntuacion}</h4>

        </div>

        <Link to= '/home' ><button>Volver</button> </Link>
    </div>
)


}