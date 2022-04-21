import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { postUser } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Button, CssBaseline, FormControl, FormHelperText, Input, InputLabel, Typography } from '@material-ui/core';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import Transition from '../image_transition/Transition';

export function validate(user) {
    let errors = {};
	const regexp_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    const regexp_passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
	const regexp_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	
    if (!regexp_nombre.test(user.nombre)) {
        errors.nombre = 'debe ingresar nombre completo'
    }
    if (!regexp_nombre.test(user.apellido)) {
        errors.apellido = ' debe ingresar apellido completo'
    }
    if (!regexp_passwd.test(user.password)) {
        errors.password = 'ingrese una contraseña que contenga letras y numeros'
    }
    if (!regexp_correo.test(user.email)) {
        errors.email = 'ingrese una direccion de correo electronico'
    }
    return errors
}

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
        borderColor:'1px solid red',
        gap:'6px',
        '& > *': {
            margin: theme.spacing(1),
        },
      },
}));

export default function CreateConductora() {
    const classes = useStyles();
    // const navigate = useNavigate()
    const dispatch = useDispatch();
    const [user, setUser] = useState({   //este es mi input
        nombre: "",
        apellido: "",
        email: "",
        //rol:"",
        password: "",
        //estado:"", 
        imagen: ""
    });

    const [errors, setErrors] = useState({})
    
    async function handleSubmit(e) {
        e.preventDefault()
        //console.log('entro',auxInput)
        let errors = Object.keys(validate(user))

        if (errors.lenght !== 0) {
            dispatch(postUser(user))
            setUser({
                nombre: "",
                apellido: "",
                email: "",
                //rol:"",
                password: "",
                //estado:"", 
                imagen: ""
            })

            alert('usuario creado con exito')
        } else {
            alert('rellenar los campos correctamente')
        }
        //navigate('/home') 
    }


    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...user,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className={classes.logInContainer}>
            <CssBaseline/>
            <Transition/>
            <div className={classes.right}>
                <div className={classes.divSingUp}>
                    <h2 style={{'fontWeight':'bold'}}>Cinem<span style={{'color':'#5ED5A8'}}>App</span></h2>
                    <Typography color='secondary' style={{fontSize:'30px'}}>Completa el formulario</Typography>
                    <br/>
                    {/* <p>Campos obligatorios <span style={{color:'red'}}>*</span></p> */}
                    <form className={classes.form} onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                        <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', gap:'15px', width:'100%'}}>
                            <FormControl>
                                <InputLabel htmlFor="user">Nombre(s) <span style={{color:'red'}}>*</span></InputLabel>
                                <Input type='text' name='nombre' id="user" aria-describedby="helperName"
                                    error={errors?.nombre?true:false}
                                    fullWidth
                                    autoFocus
                                    size='small'
                                    color='primary'
                                    value={user.nombre}
                                    onChange={handleChange}
                                    title={errors?.nombre ? errors.nombre: `Nombre es correcto`}
                                    required
                                />
                                <FormHelperText id="helperName">Escribe tu nombre.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="apellidos">Apellido(s) <span style={{color:'red'}}>*</span></InputLabel>
                                <Input type='text' name='apellido' id="apellidos" aria-describedby="apellidos"
                                    error={errors?.apellido?true:false}
                                    fullWidth
                                    size='small'
                                    color='primary'
                                    value={user.apellido}
                                    onChange={handleChange}
                                    title={errors?.apellido ? errors.apellido: `Apellido es correcto`}
                                    required
                                />
                                <FormHelperText id="apellidos">Escribe tus apellidos.</FormHelperText>
                            </FormControl>
                        </div>
                        <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', gap:'15px', width:'100%'}}>
                            <FormControl>
                                <InputLabel htmlFor="correo">Correo <span style={{color:'red'}}>*</span></InputLabel>
                                <Input type='text' name='email' id="correo" aria-describedby="descripcion"
                                    error={errors?.email?true:false}
                                    fullWidth
                                    size='small'
                                    color='primary'
                                    value={user.email}
                                    onChange={handleChange}
                                    title={errors?.email ? errors.email: `Correo es correcto`}
                                    required
                                />
                                <FormHelperText id="descripcion">Escribe tu correo elecctrónico.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="paswd">Contraseña <span style={{color:'red'}}>*</span></InputLabel>
                                <Input type='password' name='password' id="paswd" aria-describedby="apellidos"
                                    error={errors?.password?true:false}
                                    fullWidth
                                    size='small'
                                    color='primary'
                                    value={user.password}
                                    onChange={handleChange}
                                    title={errors?.password ? errors.password: `Contraseña válida y segura`}
                                    required
                                />
                                <FormHelperText id="apellidos">Entre 8 y 16 caracteres</FormHelperText>
                            </FormControl>
                        </div>
                        <FormControl>
                            <InputLabel htmlFor="foto">Imagen de perfil</InputLabel>
                            <Input type='file' name='imagen' id="foto" aria-describedby="perfil"
                                error={errors?.imagen?true:false}
                                fullWidth
                                size='small'
                                color='primary'
                                value={user.imagen}
                                onChange={handleChange}
                            />
                            <FormHelperText id="perfil">Sube una foto de perfil.</FormHelperText>
                        </FormControl>
                        <div style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                            <Button variant='contained' color="primary" disableElevation type='submit'
                            disabled = {(errors?.nombre || errors?.apellido || errors?.email || errors?.password) ? true : false}
                            >Registrarse</Button>
                            <Button variant='contained' color='secondary' href='/home' disableElevation
                            startIcon={<ExitToAppSharpIcon />}>Regresar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}