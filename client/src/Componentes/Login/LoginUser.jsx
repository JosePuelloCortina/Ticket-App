import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {login, loginGoogleFill } from '../../redux/actions/index';
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { postUser } from '../../redux/actions/index';
import uno from '../Image/uno.jpg'
import dos from '../Image/dos.jpg'
import tres from '../Image/tres.jpg';


  
  export default function Login() {
  
    const user = useSelector(state => state.userInfo);

    const [input, setInput] = useState({
      password:'',
      email: ''
    })
    const [error, setError] = useState()
    const navigate = useNavigate()
  
    const dispatch= useDispatch()
  
    const handleChange = (e) => {
  
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
      const errors = {
        ...error,
        [e.target.name]: ''
      }
      setError(errors)
     }
    const handleSubmit = (e) => {
      e.preventDefault()
       const errors = {
        ...error,
        email: '',
        password:''
     }
     setError(errors)
  
      dispatch(login(input.email, input.password))
      console.log(user)
      navigate('/home')
    }
  
    // useEffect(()=>{
    //   dispatch()
    // }, [])
  const onGoogleSucces = (response)=>{
    console.log(response);
    const usuario = response.profileObj;
    const newUserFromGoogle = {
      nombre: usuario.familyName,
      apellido: usuario.familyName,
      email: usuario.email,
      password: usuario.googleId,
      estado: true,
      imagen: usuario.imageUrl 
    }
    dispatch(postUser(newUserFromGoogle));
    dispatch(loginGoogleFill(newUserFromGoogle));
    navigate('/home')
  }
  
  const onFailGoogle = () => {
    alert("Algo salió mal")
  }
  return (
      <div className='row conteiner p-4' >
        <div className='col-md-8'>
  
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="tamaño" src={uno} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="tamaño" src={dos} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="tamaño" src={tres} alt="Third slide" />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  
        {/* FORM LOGIN */}
        <div className='col-md-4'>
          <div className='mt-5 ms-5'>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleSubmit} >
              <div className="form-group"> {/* CORREO */}
                <label htmlFor="exampleInputEmail1">Correo</label>
                <input type="email" 
                className="form-control" 
                placeholder="Ingresar Correo" 
                name='email' 
                onChange={handleChange} 
                value={input.email} />
                {/* Contraseña  */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                name='password'
                onChange={handleChange} 
                value={input.password}/>
                <small >El equipo de Ticket - App bajo ninguna circunstancia pedira su correo o contraseña. </small>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Comprendo</label>
              </div>
              
                <button type="submit" className="btn btn-primary">Entrar</button>
              
  
              <div className='text-center '>
                <span>¿No tienes cuenta?</span>
                <Link to='/register' style={{
                  color: '#0066ff',
                  textDecoration: 'none',
                  margin: '5px',
                  fontWeight: 'bold'
  
                }} >
                  Registrarse
                </Link>
              </div>
  
            </form>
            <GoogleLogin
            clientId="533216406102-cnhnnd2b69dvbkt69reehsd2e7stn4t4.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onGoogleSucces}
            onFailure={onFailGoogle}
            cookiePolicy={"single_host_origin"}
          />
  
           
        </div>
      </div>
    </div>
  );
}
