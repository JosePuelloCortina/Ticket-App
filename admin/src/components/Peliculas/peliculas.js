import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getMovies } from './../../redux/actions';
import RenderForEachEl from "../RendElementos/renderEachEl";


export default function Peliculas(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return(
        <div>
            <NavBar/>
            <RenderForEachEl path='movies'/>
        </div>
    )
}