import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getCategorias } from './../../redux/actions';
import RenderForEachEl from "../RendElementos/renderEachEl";
import { Link } from "react-router-dom";


export default function Categorias(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategorias());
    }, []);

    return(
        <div>
            <NavBar/>
            <Link to="/categoria/add">
            <button>Agregar Categoria</button>
            </Link>
            <RenderForEachEl/>
        </div>
    )
}