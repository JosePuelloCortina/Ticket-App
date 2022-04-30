import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/navbar";
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from "../redux/actions";


export default function AddTickets(){

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        numero: "",
        fecha_hora: "",
        precio: 0,
        descuento: 0,
        numero_sala: "" ,
        peliculaId: ""
    });
    const movies = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(getMovies());
    });

    const handleChangeInput = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(input);
    }

    const handleChangeMovie = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            peliculaId: e.target.value 
        });
        console.log(input);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch();
    }

    return(
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <label>Número</label>
                <input onChange={handleChangeInput} name="numero" value={input.numero}/>

                <label>Fecha y Hora</label>
                <input onChange={handleChangeInput} name="fecha_hora" value={input.fecha_hora}/>

                <label>Precio</label>
                <input onChange={handleChangeInput} name="precio" value={input.precio}/>

                <label>Descuento</label>
                <input onChange={handleChangeInput} name="descuento" value={input.descuento}/>

                <label>Número de sala</label>
                <input onChange={handleChangeInput} name="numero_sala" value={input.numero_sala}/>
                
                <select onChange={handleChangeMovie}>
                    <option defaultValue>Movie</option>
                    {
                        movies?.map(m => {
                            return(
                                <option value={m.id}>{m.nombre}</option>
                            )
                        })
                    }
                </select>

                <button type="submit">GUARDAR</button>
            </form>
        </div>
    )
}