import React, { useEffect } from "react";
import NavBar from './../NavBar/navbar';
import { useDispatch } from 'react-redux';
import { getAdmins } from './../../redux/actions';
import RenderForEachEl from "../RendElementos/renderEachEl";


export default function Admins(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdmins());
    }, []);

    return(
        <div>
            <NavBar/>
            <RenderForEachEl/>
        </div>
    )
}