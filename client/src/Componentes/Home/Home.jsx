import React from "react";
// import {Link} from 'react-router-dom';
// import {Button} from '@material-ui/core';
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";

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
            <NavBar/>
            <div>
                {/* <div>
                   <Link to={`/register`} style={{'textDecoration': 'none'}}>
                       <Button color="primary" variant="contained" disableElevation>REGÍSTRATE</Button>
                   </Link>
                </div>
                <br/> */}
            {/* <div>
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
            </div> */}
            <Cards />
            </div>
        </div>
    )
}
