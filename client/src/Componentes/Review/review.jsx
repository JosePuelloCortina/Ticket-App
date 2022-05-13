import React from "react";
//import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {postReview , getReview, getAllReview,  putReview} from '../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import  './Review.module.css'
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import imagenlog from '../../assets/imagenlog.jpg';
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  image: {
      width: '80px',
      height: '100px',
      borderRadius: '25px',
  }

}));
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
    const users = JSON.parse(window.localStorage.getItem( "userLogged"))
    useEffect(() => {
      dispatch(getReview(id));
      //dispatch(getAllReview(id))    
    }, [dispatch]); 

   
    const handleSubmit = (e) => {
      e.preventDefault()
      if(reviews.filter(e=>e.nombre === users.nombre)){
      dispatch(postReview(movies && movies[0].id, users.id, input))
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
const classes = useStyles();
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
                <div key={re.nombre} >
                <Grid item xs={12} sm={3}>
                      <img className={classes.image} src={re.imagen ? re.imagen: imagenlog} alt="" />
                  </Grid>
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
            }{/*<h2>No hay comentarios</h2>*/}
            </div> 
            <button className="btn btn-primary" onClick={() => navigate('/home')}>Inicio</button>
        </div>
      </div>
    </div>
    </>
    )
}