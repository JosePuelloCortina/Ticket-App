import React from "react";
//import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {postReview , getReview, getAllReview,  putReview} from '../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import  './Review.module.css'
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";




export default function Reviews ({idMovies}) {
   // let { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    //const  id="'41f5c363-cec8-4c4b-bfd1-b24b29b3a2b4'";
     // const user = id
    //  console.log('idUser :>> ', idUser);

    const movies= useSelector((state) => state.movies)
    const reviews = useSelector((state) => state.allReview)
    const user =useSelector((state)=> state.userInfo)
    
    const [input, setInput] = useState({
      // idUser:'',
      //   idMovies:'',
        commentary:'',
        calification:''
    })
    //const user = JSON.parse(window.localStorage.getItem( 'usuario'))
    useEffect(() => {
      dispatch(getReview(idMovies));
     // dispatch(getAllReview())    
    }, [dispatch]);  

 
    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   if(input){
    //   dispatch(postReview(input))
    //         setInput({
    //           // idUser:'',
    //           //   idMovies:'',
    //             comentary:'',
    //             calification:''
    //         })
    //         // Swal.fire({
    //         //   icon: 'success',
    //         //   title: 'Su Comentario se ha creado correctamente',
    //         // })
    //       }else{
    //         // Swal.fire({
    //         //   icon: 'error',
    //         //   title: 'ups..su comentario no se ha procesado correctamente',
    //         // })
    //       }
    //     }
    const handleSubmit = (e) => {
      e.preventDefault()
        if (reviews) {
          if ( !user.nombre ) {
            e.preventDefault()
            // swal("Necesitas tener una cuenta para dejar comentarios", {
            //   buttons: false,
            //   icon: 'error',
            //   timer: 1500,
            // })
            setInput({
              calification: '',
              commentary: '',
            })
          }
          else if ( reviews.filter(e => e.nombre.toLowerCase() === user.nombre.toLowerCase()).length > 0) {
            e.preventDefault()
            dispatch(putReview(movies && movies.idMovies, user.id, input));
            setInput({
              calification: '',
              commentary: '',
            })
          } else if ( !user.admin ) {
            e.preventDefault()
            dispatch(postReview(movies && movies.idMovies, user.id , input))
            setInput({
              calification: '',
              commentary: '',
            })
          
          } else if ( user.admin ) {
          e.preventDefault()
          // swal("Los usuarios administradores no pueden dejar comentarios a los productos", {
          //   buttons: false,
          //   icon: 'error',
          //   timer: 3500,
          // })
          }
        } 
        
      } 


console.log('input :>> ', input);
    return(
    <>
    <div className="container">
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
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.nombre ? re.nombre : "Juana 123"}</h5>
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