import React, {useEffect} from "react";
import {useDispatch, useState, useSelector} from 'react-redux';
import {allMovies} from '../../redux/actions/index';
import CardsTickets from "../Cards Tickets/Cards";
import {Link} from 'react-router-dom'

export default function Home(){
    const dispatch = useDispatch()
    const movies = useSelector((state)=>state.movies.data)

    useEffect(()=>{
        dispatch(allMovies())
    },[])

    function handleSort(e){
        e.preventDefault();
    }
    function handleRating(e){
        e.preventDefault();
      
    }
    function handleSala(e){
        e.preventDefault();
      
    }

    return(
        <div>
            <div>
            <h1>TICKET APP</h1>
            <div className='lala'>
                   <Link to='/register'> <button className='bt'>REGISTRARSE</button></Link>
                   <Link to='/login'> <button className='bt'>LOGIN</button></Link>
                    </div>
            <br/>
            <div>
            <select onChange={e => handleSort(e)}>
                                <option value="default">Order</option>
                                <option value="asc">A - Z</option>
                                <option value="desc">Z - A</option>
                            </select>

            <select onChange={e => handleRating(e)}>
                                <option value="default">Order by Rating</option>
                                <option value="asc">mas</option>
                                <option value="desc">menos</option>
                            </select>

            <select onChange={e => handleSala(e)}>
                                <option value="default">Selecciona tu sala</option>
                                <option value="asc">VIP</option>
                                <option value="desc">normal</option>
                            </select>
            </div>
            <br/>
            <div>
            
        <CardsTickets
                allMovies={movies}
        />
            


            </div>
            </div>
        </div>
    )
}
