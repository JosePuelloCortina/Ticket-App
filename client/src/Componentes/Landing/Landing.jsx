import React from "react";
import {Link} from 'react-router-dom';
import './Landing.css'

export default function Landing(){
    return(
        <div className="wpLanding">
            <div>
            <Link className="btb" to='/home'>
                <button className='btLanding'>
                    <div  className="text">
                        <h1>¡¡WELCOME!!</h1>
                        <h2>TICKETS PELIS</h2>
                        <p>click to start!!</p>
                    </div>
                </button>
            </Link>
            </div>
        </div>
    )
}