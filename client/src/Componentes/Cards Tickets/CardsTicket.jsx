import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function CardTicket({id, nombre, image, estreno}){

// const navigate = useNavigate
// function handleClick(e){
//     navigate('/detail')
// }

return(
    <div>
        <div key={id}>
        {/* <Link to='/detail'> */}

            <img src='https://www.cinepremiere.com.mx/wp-content/uploads/2021/12/peliculas-2022-mas-esperadas-900x506.jpg' width='450' height='300' alt='not found'/>
            <h1>Nombre: {nombre}</h1>
            <h2>Estreno: {estreno}</h2>
        {/* </Link> */}
        </div>
        <Link to={'/id/:id'}> MAS DETALLES </Link>
    </div>
)
}