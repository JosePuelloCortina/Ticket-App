import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';


export default function Login(){

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(login(input.email, input.password));
        navigate("/home");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="email" placeholder="Email"/>
            <input onChange={handleChange} name="password" placeholder="Contraseña"/>
            <button type="submit">Ingresar</button>
        </form>
    )
}