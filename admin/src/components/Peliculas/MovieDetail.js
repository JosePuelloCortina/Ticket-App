import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editMovie, getMovieDetail } from './../../redux/actions';



export default function UserDetail(){

    const { id }= useParams();

    const dispatch = useDispatch();

    const movie = useSelector(state => state.movieDetail);

    useEffect(() => {
        dispatch(getMovieDetail(id));
    }, []);


    const [input, setInput] = useState({
        nombre: '',
        fecha: '',
        duracion: '',
        descripcion: '',
        trailer: '',
        estreno: ''
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
        dispatch(editMovie(id, input))
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input onChange={handleChangeInput} name="nombre" placeholder={movie.nombre}/>
            <label>Fecha</label>
            <input onChange={handleChangeInput} name="fecha" placeholder={movie.fecha}/>
            <img src={movie.imagen}/>
            <label>Duración</label>
            <input onChange={handleChangeInput} name="duracion" placeholder={movie.duracion}/>
            <label>Descripción</label>
            <textarea onChange={handleChangeInput} name="descripcion" placeholder={movie.descripcion}/>
            <label>Link Trailer</label>
            <textarea onChange={handleChangeInput} name="trailer" placeholder={movie.trailer}/>
            <label>Estreno</label>
            <input onChange={handleChangeInput} name="estreno" placeholder={movie.estreno}/>
            <label>Categorías</label>
            {
                movie?.Categoria.map(c => {
                    return(
                        <h3>{c.nombre}</h3>
                    )
                })
            }

            <button type={"submit"}>Subir Cambios</button>
        </form>
    )
}