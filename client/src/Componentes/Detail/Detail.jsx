import React from "react";
import { Link } from "react-router-dom";

export default function Detail(){

return(
    <div>
        <div>
            <h1>Nombre: {'The Batman'}</h1>
            <h3>Estreno: {'Abril 2022'}</h3>
            <br/>
            <img  src='https://www.loslunesseriefilos.com/wp-content/uploads/2022/03/the-batman-traje.jpg' width='500' height='430' alt='not found'/>
            <br />
            <h2>Resumen: {'Probablemente, este es el mayor acierto de la película, que sigue al hombre murciélago en una trama detectivesca en la que Enigma va matando a distintos prohombres de Gotham en asesinatos con mucha escenografía, dejando en el camino pistas dirigidas a Batman para que le siga los talones y le ayude a descubrir el misterio.'}</h2>
        </div>
        <Link to= '/home' ><button>Volver</button> </Link>
    </div>
)


}