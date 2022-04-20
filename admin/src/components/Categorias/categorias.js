import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getCategorias } from './../../redux/actions';
import RenderForEachEl from "../RendElementos/renderEachEl";


export default function Categorias(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategorias());
    }, []);

    return(
        <div>
            <NavBar/>
            <RenderForEachEl/>
        </div>
    )
}