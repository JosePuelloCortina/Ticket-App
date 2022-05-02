import React from "react";
//import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {postReview , getReview, getAllReview} from '../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import s from './Review.module.css'
import { useNavigate, useParams } from "react-router-dom";
//import ReactStars from "react-rating-stars-component";




export default function Reviews () {
    let { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    //idUser='41f5c363-cec8-4c4b-bfd1-b24b29b3a2b4';
     //const user = idUser
     //console.log('idUser :>> ', idUser);

    const users= useSelector((state) => state.userInfo)
    const reviews = useSelector((state) => state.allReview)
    
    
    const [input, setInput] = useState({
        idMovies:'',
        comentary:'',
        calification:''
    })

    useEffect(() => {
      dispatch(getReview(id));     
    }, [id]);  

 
    const handleSubmit = (e) => {
      e.preventDefault()
      if(input){
      dispatch(postReview(input))
            setInput({
                idMovies:'',
                comentary:'',
                calification:''
            })
            // Swal.fire({
            //   icon: 'success',
            //   title: 'Su Comentario se ha creado correctamente',
            // })
          }else{
            // Swal.fire({
            //   icon: 'error',
            //   title: 'ups..su comentario no se ha procesado correctamente',
            // })
          }
        }


console.log('input :>> ', input);
    return(
    <>
    <div className={s.container}>
      <div className="row">
        <div className="col-6 mx-auto">
          <div>
            <form 
                className="row" 
                style={{justifyContent:"space-between"}} 
                onSubmit={handleSubmit}>
              <textarea  
                    className="form-control" 
                    style={{marginBottom:20}} 
                    type='text' 
                    placeholder="comentario..." 
                    rows="3"  
                    value={input.comentary} 
                    onChange={e => setInput({ ...input, comentary: e.target.value })}>
              </textarea>
              <div style={{marginBottom:20}} className="btn-group col-3" >{/*agrupa los botones*/}
                <label style={{marginRight:20}}>Calificación</label>
                <input 
                    className="form-input" 
                    type='number' 
                    max={5} 
                    min={1} 
                    placeholder="0" 
                    value={input.calification} 
                    required={true} 
                    onChange={e => setInput({ ...input, calification: e.target.value })} />
              </div>
              <div className="col-3 text-end" style={{marginLeft:50}} >
              <button className="btn btn-primary">Comentar</button>
              </div>
            </form>
          </div>

          <hr className="featurette-divider"/>
          <div>
            {reviews.length > 0 ?
              reviews.map((re) => (
                <div key={re.users} >
                  <div className="be-img-comment" >	
                      <img src={re.imagen } alt="" className="be-ava-comment"/>
                  </div>
                  <div className="review-colomn" >
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.nombre ? re.nombre : "Juana 123"}</h5>
                    </span>
                    <div>
                      {/* <h6>Puntaje: { 
                      <ReactStars
                            count={5}
                            value={re.calification}
                            size={28}
                            // activeColor="#ffd700"
                            activeColor="rgb(250, 200, 0)"
                      />}</h6> */}
                      </div>
                    </div> 
                    <p className="be-comment-text"><b>Comentario:</b> {re.comentary}</p>
                  </div>
              )) 
            :  null 
            }{/*<h2>No hay comentarios</h2>*/}
            </div>  
            <button className="btn btn-primary" onClick={() => navigate('/home')}>Inicio</button>
        </div>
      </div>
    </div>
    </>
    )
}