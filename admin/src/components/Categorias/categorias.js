import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getCategories } from './../../redux/actions';
import { deleteElement } from "../../redux/actions";


export default function Categorias(){

    const dispatch = useDispatch();

    const categorias = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteElement("categories", id));
    }

    return(
        <div>
            <NavBar/>
            <Link to="/categoria/add">
            <button>Agregar Categoria</button>
            </Link>
            {
                categorias?.map(c => {
                    return(
                        <div>
                            <h1>{c.nombre}</h1>
                            <button onClick={e => handleDelete(e, c.id)}>Eliminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}