import React from "react";
import { useEffect, useState } from "react";
import {postReview , getReview } from '../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import  './Review.module.css'
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import imagenlog from '../../assets/imagenlog.jpg';
import { Button, Divider, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
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
    <div>
      <div>
        <div>
          <div style={{ marginTop:10, padding:10, color:'white'}}>
            <form 
                style={{justifyContent:"space-between"}} 
                onSubmit={handleSubmit}>
              <TextField  
                style={{marginBottom:20, width:'40%', backgroundColor:'#f3f3f3', borderRadius:6}} 
                label="comentario..."
                variant="outlined"
                multiline
                minRows={4}  
                value={input.commentary} 
                onChange={e => setInput({ ...input, commentary: e.target.value })}
              />
              <div style={{marginBottom:20, display:'flex', flexDirection:'row', alignItems:'center', gap:10}} >
                <label style={{marginRight:20}}>Calificación</label>
                <TextField 
                  style={{backgroundColor:'#f3f3f3', borderRadius:6, width:100}}
                  variant="outlined"
                  size="small"
                  type="number"
                  inputProps={{ min: 1, max: 5 }}
                  placeholder="0"
                  value={input.calification} 
                  required 
                  onChange={e => setInput({ ...input, calification: e.target.value })} 
                />
                <button >Comentar</button>
              </div>
            </form>
          </div>
          <Divider style={{backgroundColor:'gray', margin:'10px 0px'}}/>
          <div >
            {reviews.length > 0 ?
              reviews.map((re, i) => (
                <div key={i} >
                  <img className={classes.image} src={re.imagen ? re.imagen: imagenlog} alt="" />
                  <div>
                  <Typography color="secondary">
                    Usuario: <span style={{color:'white'}}>{re.nombre ? re.nombre : "Cinema-App"}</span>
                  </Typography>
                  <div>
                    <Typography color="secondary">
                      Puntaje: { 
                      <ReactStars
                            count={5}
                            value={re.calification}
                            size={28}
                            // activeColor="#ffd700"
                            activeColor="rgb(250, 200, 0)"
                      />}
                    </Typography>
                  </div>
                </div> 
                <Typography color="secondary" component="p"><b>Comentario:</b> {re.commentary}</Typography>
              </div>
              )) 
            :  null 
            }{/*<h2>No hay comentarios</h2>*/}
            </div> 
            <Button variant="contained" color="primary" style={{margin:'10px 0px'}} onClick={() => navigate('/home')}>Regresar</Button>
        </div>
      </div>
    </div>
    </>
    )
}