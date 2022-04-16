import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {moviesDetail} from '../../redux/actions/index';


export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(moviesDetail(id))
    },[id]);

    const detail = useSelector((state)=>state.detail)

return(
    <div>
        <div>
        { detail? (
            <div >
            <div key={detail.id}></div>
            <h1>Nombre: {detail.nombre} </h1>
            <h3>Estreno: {detail.estreno}</h3>
            <h4>Fecha:{detail.fecha}</h4>
            <br/>
            <img  src='https://www.loslunesseriefilos.com/wp-content/uploads/2022/03/the-batman-traje.jpg' width='500' height='430' alt='not found'/>
            <br />
            <h4>Descripcion: {detail.descripcion}</h4>
            <h4>Duracuion:{detail.duracion}</h4>
            <h4>Trailer:{detail.trailer}</h4>
            <h4>Puntuacion:{detail.puntuacion}</h4>
            </div>
         ):(<h1>...loading</h1>)
          }
            
          </div>
        

        <Link to= '/home' ><button>Volver</button> </Link>
    </div>
)


}