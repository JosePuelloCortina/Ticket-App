import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from 'react-redux';
import { getCategories, newMovie } from "../../redux/actions";
import { useSelector } from 'react-redux';

export default function AddMovie(){

    const dispatch = useDispatch();

    const categorias = useSelector(state => state.categories)

    const [input, setInput] = useState({
        nombre: '',
        fecha: '',
        image: '',
        duracion: '',
        descripcion: '',
        trailer: '',
        estreno: '',
        puntuacion: '',
        categorias: []
    });

    useEffect(() => {
        dispatch(getCategories())
    }, [])
    
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
        setInput({
            nombre: '',
            fecha: '',
            image: '',
            duracion: '',
            descripcion: '',
            trailer: '',
            estreno: '',
            puntuacion: '',
            categorias: []
        })
    }

    function handleChangeCategories(e){
        setInput({
            ...input,
            categorias: [...input.categorias, e.target.value]
        });
    }

    function handleDeleteCategorie(c){
        setInput({
            ...input,
            categorias: input.categorias.filter(ctg => ctg !== c)
        })
    }
    return(
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input value={input.nombre} onChange={handleChangeInput} name="nombre"/>
                <label>Fecha</label>
                <input value={input.fecha} onChange={handleChangeInput} name="fecha"/>
                <label>Imagen</label>
                <input value={input.image} onChange={handleChangeInput} name="image"/>
                <label>Duracion</label>
                <input value={input.duracion} onChange={handleChangeInput} name="duracion"/>
                <label>Descripción</label>
                <input value={input.descripcion} onChange={handleChangeInput} name="descripcion"/>
                <label>Trailer</label>
                <input value={input.trailer} onChange={handleChangeInput} name="trailer"/>
                <label>Estreno</label>
                <input value={input.estreno} onChange={handleChangeInput} name="estreno"/>
                <label>Puntuación</label>
                <input value={input.puntuacion} onChange={handleChangeInput} name="puntuacion"/>
                <select onChange={handleChangeCategories}>
                    <option defaultValue>Categorías</option>
                    {
                        categorias?.map( c => {
                            return(
                                <option value={c.nombre}>{c.nombre}</option>
                            )
                        })
                    }
                </select>
                
                
                <button type="submit">Submit</button>
            </form>
                    {
                        input.categorias.map(c => {
                            return(
                                <div>
                                    <h3>{c}</h3>
                                    <button onClick={() => handleDeleteCategorie(c)}>x</button>
                                </div>
                            )
                        })
                    }
        </div>
    )
}