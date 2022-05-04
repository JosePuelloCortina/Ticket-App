import React from "react";
//import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {postReview , getReview, getAllReview,  putReview} from '../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import  './Review.module.css'
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


export default function Reviews ({id}) {
   // let { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const movies= useSelector((state) => state.movies.data)
    const reviews = useSelector((state) => state.allReview)
    const user =useSelector((state)=> state.userInfo)

   
    const [input, setInput] = useState({
      // idUser:'',
      //   idMovies:'',
        commentary:'',
        calification:''
    })
    //const users = JSON.parse(window.localStorage.getItem( 'usuario'))
    useEffect(() => {
      dispatch(getReview(id));
      dispatch(getAllReview(id))    
    }, [dispatch, id]);  

 
    const handleSubmit = (e) => {
      e.preventDefault()
      if(input){
      dispatch(postReview(movies && movies[0].id, user.id, input))
            setInput({
              // idUser:'',
              //   idMovies:'',
                commentary:'',
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


console.log(reviews);
console.log('input :>> ', input);
    return(
    <>
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
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
                    value={input.commentary} 
                    onChange={e => setInput({ ...input, commentary: e.target.value })}>
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
                <div key={re.user} >
                  <div className="be-img-comment" >	
                      <img src={re.imagen } alt="" className="be-ava-comment"/>
                  </div>
                  <div className="review-colomn" >
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.nombre ? re.nombre : "Cinema-App"}</h5>
                    </span>
                    <div>
                      <h6>Puntaje: { 
                      <ReactStars
                            count={5}
                            value={re.calification}
                            size={28}
                            // activeColor="#ffd700"
                            activeColor="rgb(250, 200, 0)"
                      />}</h6>
                      </div>
                    </div> 
                    <p className="be-comment-text"><b>Comentario:</b> {re.commentary}</p>
                  </div>
              )) 
            :  null 
            }<h2>No hay comentarios</h2>
            </div> 
            <button className="btn btn-primary" onClick={() => navigate('/home')}>Inicio</button>
        </div>
      </div>
    </div>
    </>
    )
}