import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteElement } from "../../redux/actions";



export default function RenderForEachEl(path){

    const dispatch = useDispatch();
    
    const elementos = useSelector(state => state.allElements);

    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteElement(path.path, id));
        console.log(path)
    }
    
    return(
        <div>
            {
                elementos?.map(el => {
                    return(
                        <div>
                            <h1>{el.nombre}</h1>
                            <Link to={`/${path.path}/${el.id}`}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={e => handleDelete(e, el.id)}>Eliminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}