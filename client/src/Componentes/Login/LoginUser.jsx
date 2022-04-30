import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginGoogle } from '../../redux/actions/index';
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { postUser } from '../../redux/actions/index';
import Transition from '../image_transition/Transition';
import { Button, Checkbox, CssBaseline, FormControlLabel, FormGroup, TextField, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

export function validate(input) {
  let error = {};
  const regexp_passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
	const regexp_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!regexp_correo.test(input.email))
    error.email = 'Correo no válido';
  
  if(!regexp_passwd.test(input.password))
    error.password = "Contraseña no válida";
  
  return error;
};

const useStyles = makeStyles((theme)=>({
  logInContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    minHeight: '100vh',
    },
  right:{
    backgroundColor: '#fff',
    width: '50%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // aqui el frame div derecho
  forgot:{
    marginTop: '15px',
    width: '338px',
    height: '24px',
    left: '780px',
    top: '634px',
    fontFamily: `"Avenir LTS Regular", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    boxSizing: 'border-box',
    borderColor: '1px solid red',
  },
  divSingUp:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    maxWidth:'100%',
    height:'fitContent',
    overflow:'hidden auto',
    padding: '1rem',
  },
  form:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap:'12px',
  },
}));

  export default function Login() {
    
    const user = useSelector(state => state.userInfo);
    const [input, setInput] = useState({
      email: "",
      password:"",
    })
    const [check, setCheck] = useState(false);
    const [error, setError] = useState()
    const navigate = useNavigate()
  
    const dispatch= useDispatch()
  
    const handleChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
  
      setError(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
     };
    
    const handleChangeCheck = (e) =>{
      setCheck(!check);
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
  
  const onGoogleSucces = async (response)=>{
    const usuario = response.profileObj;
    const newUserFromGoogle = {
      nombre: usuario.givenName,
      apellido: usuario.familyName,
      email: usuario.email,
      password: usuario.googleId,
      estado: true,
      imagen: usuario.imageUrl 
    }
    dispatch(loginGoogle(newUserFromGoogle));
    navigate('/home');
  }
  
  const onFailGoogle = () => {
    console.log("Algo salió mal");
  }

  const classes = useStyles();
  return (
    <div className={classes.logInContainer}>
      <CssBaseline/>
      <Transition/>
      <div className={classes.right}>
        <div className={classes.divSingUp}>
          <h2 style={{'fontWeight':'bold'}}>Cinem<span style={{'color':'#5ED5A8'}}>App</span></h2>
          <Typography color='secondary' style={{fontSize:'30px'}}>Login</Typography>
          <br/>
          <p>Regístrate para ingresar a nuestra plataforma</p>
              <form onSubmit={handleSubmit} className={classes.form} autoComplete='off'>
                <TextField
                  defaultValue={``}
                  name = 'email'
                  type = 'text'
                  fullWidth
                  autoFocus
                  size = 'small'
                  color = 'primary'
                  margin = 'normal'
                  variant = 'outlined'
                  label='Correo elecctrónico'
                  value={input.email}
                  onChange={handleChange}
                  error={error?.email ? true:false}
                />
                <TextField
                  defaultValue={``}
                  name = 'password'
                  type={`password`}
                  value={input.password}
                  fullWidth
                  size='small'
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Contraseña'
                  onChange={handleChange}
                  error={error?.password?true:false}
                />
                <Typography component={`p`} style={{maxWidth: '350px', fontSize: '14px'}}>  
                  El equipo de CinemApp bajo ninguna circunstancia pedira su correo o contraseña. 
                </Typography>
                <FormGroup>
                  <FormControlLabel 
                    control={<Checkbox 
                      id='checkBox'
                      name='checkBox'
                      color='primary'
                      value={check}
                      onChange={handleChangeCheck}
                    />} 
                    label="Comprendo"
                  />
                </FormGroup>
                <Button type='submit' variant='contained' color='primary' disableElevation
                  disabled={(error?.email || error?.password || !check) ? true: false}
                >Ingresar</Button>
                <div style={{marginBottom:'7px'}}>
                  <Typography component='span'>¿No tienes cuenta?
                    <Link to='/register' style={{ color: '#0066ff', textDecoration: 'none',
                      fontWeight: 'bold', marginLeft: '10px', marginRight:'10px', size:'14px' 
                    }} >
                      Regístrate
                    </Link> o inicia con
                  </Typography>
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