import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editAdmin, getAdminDetail } from './../../redux/actions';



export default function UserDetail(){

    const { id }= useParams();

    const dispatch = useDispatch();

    const admin = useSelector(state => state.adminDetail);

    useEffect(() => {
        dispatch(getAdminDetail(id));
    }, []);


    const [input, setInput] = useState({
        nombre: '',
        apellido: '',
        email: ''
    });


    function handleChangeInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(editAdmin(id, input))
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input onChange={handleChangeInput} name="nombre" placeholder={admin.nombre}/>
            <label>Apellido</label>
            <input onChange={handleChangeInput} name="apellido" placeholder={admin.apellido}/>
            <label>Email</label>
            <input onChange={handleChangeInput} name="email" placeholder={admin.email}/>
            
            <button type={"submit"}>Subir Cambios</button>
        </form>
    )
}

