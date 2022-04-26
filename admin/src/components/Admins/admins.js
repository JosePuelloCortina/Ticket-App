import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getAdmins } from './../../redux/actions';
import { useSelector } from "react-redux";
import { deleteElement } from "./../../redux/actions";
import { Link } from "react-router-dom";


export default function Admins(){

    const dispatch = useDispatch();

    const elementos = useSelector(state => state.admins);

    useEffect(() => {
        dispatch(getAdmins());
    }, []);

    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteElement("admin", id));
    }

    return(
        <div>
            <NavBar/>
            
            {
                elementos?.map(el => {
                    return(
                        <div>
                            <h1>{el.nombre}</h1>
                            <Link to={`/admin/${el.id}`}>
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