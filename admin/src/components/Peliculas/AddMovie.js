import React, {useState} from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from 'react-redux';
import { newMovie } from "../../redux/actions";

export default function AddMovie(){

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        nombre: '',
        fecha: '',
        image: '',
        duracion: '',
        descripcion: '',
        trailer: '',
        estreno: '',
        puntuacion: ''
    });
    
    function handleChangeInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(newMovie(input));
    }
    return(
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input onChange={handleChangeInput} name="nombre"/>
                <label>Fecha</label>
                <input onChange={handleChangeInput} name="fecha"/>
                <label>Imagen</label>
                <input onChange={handleChangeInput} name="image"/>
                <label>Duracion</label>
                <input onChange={handleChangeInput} name="duracion"/>
                <label>Descripción</label>
                <input onChange={handleChangeInput} name="descripcion"/>
                <label>Trailer</label>
                <input onChange={handleChangeInput} name="trailer"/>
                <label>Estreno</label>
                <input onChange={handleChangeInput} name="estreno"/>
                <label>Puntuación</label>
                <input onChange={handleChangeInput} name="puntuacion"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}