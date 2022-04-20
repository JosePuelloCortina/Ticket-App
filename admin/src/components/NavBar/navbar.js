import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <nav>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/users'>
                <button>Usuarios</button>
            <Link to='/admins'>
                <button>Admins</button>
            </Link>
            <Link to='/peliculas'>
                <button>Peliculas</button>
            </Link>
            <Link to='/categorias'>
                <button>categorías</button>
            </Link>
            </Link>
        </nav>
    )
}