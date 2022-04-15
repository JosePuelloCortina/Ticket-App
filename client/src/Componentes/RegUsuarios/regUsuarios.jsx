import React, {useEffect, useState} from 'react';
import {postUser} from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
//import {saveImages } from '../../Helpers/saveImage'
import { Link ,useNavigate} from 'react-router-dom';
// import uno from '../../image/1.jpg'
// import dos from '../../image/2.jpg'
// import tres from '../../image/3.jpg'
// import user from '../../../../api/src/routes/User';

//import { useStorage} from "reactfire"


export function validate(user){
    let errors={};
    if(!user.nombre && /\d/.test(user)){
        errors.nombre = 'debe ingresar nombre completo'
    }
    if(!user.apellido){
        errors.apellido = ' debe ingresar apellido completo'
    }
    if(!user.password){
        errors.password = 'ingrese una contraseña que contenga letras y numeros'
    }
    if(!user.email && /\S+@\S+\.\S+/.test(user)){
        errors.email= 'debe ingresar un email valido'
    }
    // if(!user.rol){
    //     errors.pais='debe ingresar algo'
    // }
    // if(!user.estado){
    //     errors.estado='debe ingresar algo'
    // }
    if(!user.imagen){
        errors.imagen='debe colocar una foto de perfil'
    }
    
    return errors
}

export default function CreateConductora(){
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const [user, setUser]=useState({   //este es mi input
        nombre:"",
        apellido:"",
        email:"",
        //rol:"",
        password:"",
        //estado:"", 
        imagen:""
    });

    const [errors, setErrors]=useState({})
    // useEffect(()=>{
    //     dispatch()
    // },[]);
   
 async function handleSubmit(e){
        e.preventDefault()       
    //console.log('entro',auxInput)
         let errors = Object.keys(validate(user))

        if(errors.lenght !==0){
            dispatch(postUser(user))
        setUser({
            nombre:"",
            apellido:"",
            email:"",
            //rol:"",
            password:"",
            //estado:"", 
            imagen:""
        })
        
        alert('usuario creado con exito')
        }else{
            alert('rellenar los campos correctamente')
        }  
       //navigate('/home') 
    }
   
         
    function handleChange(e){
        console.log(user)
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        })
        setErrors(validate({
            ...user,
            [e.target.name] : e.target.value,
        }))
    }

    return(

        <div className='col-md-4'>
        <div className='mt-2 ms-3'>
            <div>
                <h2 className='text-center'>REGISTRO USUARIO</h2>
                <p> * campos obligatorios</p>
               
            </div>
            <div>
                <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Nombre *</label>
                <input name='nombre' className="form-control"
                    type='text'
                    value={user.nombre}
                    placeholder='ingrese su/s nombre/s'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.nombre &&(
                        <p className="text-danger">
                            {errors.nombre}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label  htmlFor="exampleInputPassword1">Apellido *</label>
                <input name='apellido' className="form-control"
                    type='text'
                    value={user.apellido}
                    placeholder='ingrese su/s apellido/s'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.apellido &&(
                        <p className="text-danger">
                            {errors.apellido}
                        </p>
                    )}  
                </div>
                
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Contraseña *</label>
                <input name='password'  className="form-control"
                    id='password'
                    type='password'
                    value={user.password}
                    placeholder='ingrese su contraseña'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.password &&(
                        <p className="text-danger">
                            {errors.password}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Email *</label>
                <input name='email'  className="form-control"
                    id='email'
                    type='email'
                    value={user.email}
                    placeholder='ingrese su email'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.email &&(
                        <p className="text-danger">
                            {errors.email}
                        </p>
                    )}  
                </div>
                {/* <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Rol *</label>
                <input name='rol'  className="form-control"
                    id='rol'
                    type='text'
                    value={user.rol}
                    placeholder=''
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.rol &&(
                        <p className="text-danger">
                            {errors.rol}
                        </p>
                    )}  
                </div> */}

                {/* <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Estado *</label>
                <input name='estado' className="form-control"
                    id='estado'
                    type='text'
                    value={user.estado}
                    placeholder='ingrese el pais'
                    onChange={handleChange}
                    required>
                    </input>  
                    {errors.estado &&(
                        <p className="text-danger">
                            {errors.estado}
                        </p>
                    )} 
                </div> */}
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Foto de Perfil *</label>
                <input name='imagen' className="form-control"
                    id='imagen'
                    type='text'
                    value={user.imagen}
                    placeholder='coloque una foto de perfil'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.imagen &&(
                        <p className="text-danger">
                            {errors.imagen}
                        </p>
                    )}  
                </div>
               
                    
                    <button className="btn btn-primary" type='submit' 
                    
                     disabled={user.nombre&&user.apellido&&user.password&&user.email&&
                        user.rol&&user.estado&&user.imagen ? false : true}>Registrarse</button>
                   
                    

                    <Link  to='/home'>
                        <button className="btn btn-primary" style={{
                        margin: '10px'
                    }}>Volver</button>
                    </Link>
                    
               
                </form>
            </div>
        </div>
        </div>
      

    )

}