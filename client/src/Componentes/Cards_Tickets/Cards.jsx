import React from 'react';
import CardsTicket from './CardsTicket';

export default function CardsTickets({allMovies}){
    return(
        <>
            <section>
                { allMovies?.map(movies=>
                <CardsTicket
                key={movies.id}
                id={movies.id}
                nombre={movies.nombre}
                estreno={movies.estreno}
                fecha={movies.fecha}
                descripcion={movies.descripcion}
                duracion={movies.duracion}
                trailer={movies.trailer}
                puntuacion={movies.puntuacion} />
                )}
            </section>
        </>
    )
}