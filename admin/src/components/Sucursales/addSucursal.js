import React, { useState } from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from 'react-redux';
import { newSucursal } from './../../redux/actions';



export default function AddSucursal(){

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        pais: "",
        provincia: "",
        ciudad: "",
        direccion: ""
    });

    const handleChangeInput = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(newSucursal(input));
    }

    return(
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <label>País</label>
                <input onChange={handleChangeInput} name="pais" value={input.pais}/>
                <label>Provincia</label>
                <input onChange={handleChangeInput} name="provincia" value={input.provincia}/>
                <label>Ciudad</label>
                <input onChange={handleChangeInput} name="ciudad" value={input.ciudad}/>
                <label>Dirección</label>
                <input onChange={handleChangeInput} name="direccion" value={input.direccion}/>
                <button type="submit">GUARDAR</button>
            </form>
        </div>
    )
}