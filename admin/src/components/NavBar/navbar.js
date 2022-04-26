import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from './../../redux/actions';


export default function NavBar(){

    const dispatch = useDispatch();

    function handleLogOut(){
        dispatch(logOut())
    }
    return(
        <nav>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/users'>
                <button>Usuarios</button>
            </Link>
            <Link to='/admins'>
            <button>Admins</button>
            </Link>
            <Link to='/peliculas'>
                <button>Peliculas</button>
            </Link>
            <Link to='/categorias'>
                <button>categorías</button>
            </Link>
            <button onClick={handleLogOut}>Log Out</button>
        </nav>
    )
}