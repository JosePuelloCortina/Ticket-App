import React, {useEffect} from "react";
import NavBar from "../NavBar/navbar";
import RenderForEachEl from "../RendElementos/renderEachEl";
import { useDispatch } from 'react-redux';
import { getUsers } from "../../redux/actions";


export default function Usuarios(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return(
        <div>
            <NavBar/>
            <RenderForEachEl path='user'/>
        </div>
    )
}