import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteElement, makeAdmin } from "../../redux/actions";



export default function RenderForEachEl(path){

    const dispatch = useDispatch();
    
    const elementos = useSelector(state => state.allElements);

    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteElement(path.path, id));
        console.log(path)
    }

    function handleMakeAdmin(e, nombre, apellido, email, password){
        e.preventDefault();
        const user = {
            nombre,
            apellido,
            email,
            password
        }
        dispatch(makeAdmin(user));
    }
    
    return(
        <div>
            {
                elementos?.map(el => {
                    return(
                        <div>
                            <h1>{el.nombre}</h1>
                            <Link to={`/${path.path}/${el.id}`}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={e => handleDelete(e, el.id)}>Eliminar</button>
                            {
                                path.path === "user" ?
                                <button onClick={e => handleMakeAdmin(e, el.nombre, el.apellido, el.email, el.password)}>Hacer admin</button> 
                                :
                                <></>
                            }
                        </div>
                    )
                })
            }
           
        </div>
    )
}