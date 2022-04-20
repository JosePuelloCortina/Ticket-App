import React, { useEffect } from "react";
import CardTicket from "../Cards Tickets/CardsTicket";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allMovies } from "./../../redux/actions/index";

const Cards = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);

  useEffect(() => {
    dispatch(allMovies());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "1rem 2rem",
        gap: "20px",
        maxWidth: "100%",
        backgroundColor: "#22272E",
      }}
    >
      {movies?.map((m) => (
        <CardTicket
          key={m.id}
          poster_path={m.image}
          original_title={m.nombre}
          release_date={m.fecha}
          categoria={m.categoria}
          trailer={m.trailer}
          id={m.id}
        />
      ))}
    </div>
  );
};
export default Cards;
