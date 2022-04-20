import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUserDetail } from './../../redux/actions';



export default function UserDetail(){

    const { id }= useParams();

    const dispatch = useDispatch();

    const user = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getUserDetail(id));
    }, []);


    const [input, setInput] = useState({
        nombre: '',
        apellido: '',
        email: '',
        estado: true
    });

    function handleChangeEstadoFalse(e){
        e.preventDefault();
        setInput({
            ...input,
            estado: false
        });
        console.log(input)
    }

    function handleChangeEstadoTrue(e){
        e.preventDefault();
        setInput({
            ...input,
            estado: true
        });
        console.log(input)
    }

    function handleChangeInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(editUser(id, input))
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input onChange={handleChangeInput} name="nombre" placeholder={user.nombre}/>
            <label>Apellido</label>
            <input onChange={handleChangeInput} name="apellido" placeholder={user.apellido}/>
            <label>Email</label>
            <input onChange={handleChangeInput} name="email" placeholder={user.email}/>
            <label>Estado</label>
            {
                (user?.estado === true) ? 
                <h1>True</h1>
                :
                <h1>False</h1>
            }
            <button onClick={handleChangeEstadoFalse}>setEstado to False</button>
            <button onClick={handleChangeEstadoTrue}>setEstado to True</button>
            {
                user?.tickets?.map(t => {
                    return(
                        <h1>{t.precio}</h1>
                    )
                })
            }
            <button type={"submit"}>Subir Cambios</button>
        </form>
    )
}