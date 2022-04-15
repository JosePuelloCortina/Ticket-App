import React from "react";
import CardTicket from "../Cards Tickets/CardsTicket";
import {Link} from 'react-router-dom'

export default function Home(){

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
        <CardTicket />
            </div>
        </div>
    )
}
