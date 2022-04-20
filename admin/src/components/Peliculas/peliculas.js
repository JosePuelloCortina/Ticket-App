import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getMovies } from './../../redux/actions';
import RenderForEachEl from "../RendElementos/renderEachEl";
import { Link } from "react-router-dom";

export default function Peliculas(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return(
        <div>
            <NavBar/>
            <Link to="/movies/add">
            <button>Agregar Pelicula</button>
            </Link>
            <RenderForEachEl path='movies'/>
        </div>
    )
}