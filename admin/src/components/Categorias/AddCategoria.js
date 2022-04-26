import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { newCategorie } from "../../redux/actions";

export default function AddCategoria(){

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        nombre: ""
    });

    function handleChangeInput(e){
        e.preventDefault();
        setInput({
            ...input,
            nombre: e.target.value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();
        dispatch(newCategorie(input));
        setInput({
            nombre: ""
        })
    }

    return(
        <div>
            <input value={input.nombre} onChange={handleChangeInput}/>
            <button onClick={handleSubmit}>Subir</button>
        </div>
    )
}