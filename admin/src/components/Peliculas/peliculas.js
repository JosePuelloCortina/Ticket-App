import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getMovies } from './../../redux/actions';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteElement } from "./../../redux/actions";

export default function Peliculas(){

    const dispatch = useDispatch();

    const elementos = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteElement("movies", id));
    }

    return(
        <div>
            <NavBar/>
            <Link to="/movies/add">
            <button>Agregar Pelicula</button>
            </Link>
            {
                elementos?.map(el => {
                    return(
                        <div>
                            <h1>{el.nombre}</h1>
                            <Link to={`/movies/${el.id}`}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={e => handleDelete(e, el.id)}>Eliminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}