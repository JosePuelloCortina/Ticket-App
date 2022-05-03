import React, { useEffect } from "react";
import CardTicket from "../Cards Tickets/CardsTicket";
import { useSelector, useDispatch } from "react-redux";
import { allMovies, allGeners } from "./../../redux/actions/index";

const Cards = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  useEffect(() => {
    dispatch(allMovies());
    dispatch(allGeners());
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",
        padding: "1rem 2rem", gap: "20px", maxWidth: "100%", backgroundColor: "#22272E",
        margin:0, boxSizing:'border-box', minWidth: "100%"
      }}
    >
      {movies?.length > 0 ? movies?.map((m) => (  
        <CardTicket key={m.id}
          poster_path={m.image}
          original_title={m.nombre}
          release_date={m.fecha}
          categoria={m.Categoria}
          trailer={m.trailer}
          id={m.id}
        />
      )):(<h2 style={{color:'white', minWidth:'100%'}}>No hay datos!</h2>)}
    </div>
  );
};
export default Cards;
