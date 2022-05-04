import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const stripePromise = loadStripe(
  "pk_test_51KqHrdFIWQ9P9UeS0BNcqq35rXRsXE6uQT0s3qWLIWI1eIvffpupJ781Cflga6GjiGcsYJZQRaLGo1AHrmR4nZF000iEqZdKf7"
);
const CheckoutForm = () => {
  const [film, setFilm] = useState({});
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { id: idParams} = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [idTickets, setIdTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const user = useSelector((state) => state.userInfo);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedTickets, setSelectedTickets] = useState([]);
console.log(allTickets)
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3001/movies/id/${idParams}`);
      const movieId = result.data.data;
      setAllTickets([...result.data.data.tickets]);
      setFilm(movieId);
    }

    fetchData();
  }, [idParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email,
      },
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("http://localhost:3001/stripe/pago", {
          id,
          amount: totalPrice * 100,
          userId: user.id,
          idTickets: idTickets,
          comprador_email: user.email,
        });
        setIdTickets([]);
        setTotalPrice(0);
        setMessage(data.message);
        setTimeout(() => setMessage(null), 5000);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
        setMessage(error.message);
        setTimeout(() => setMessage(null), 5000);
      }
    }

    setEmail("");
  };

  const handleChecked = (e) => {
    e.preventDefault();
    setIdTickets([...idTickets, e.target.value]);
    setTotalPrice(totalPrice + Number(e.target.id));
    setSelectedTickets([...selectedTickets, e.target.name]);
  };

  return (
    <Grid>
      <section
        style={{
          padding: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          color: "gray",
        }}
      >
        <img src={film.image} alt={film.nombre} width={300} height={450} />
        
        <form onSubmit={handleSubmit} style={{backgroundColor:'#f3f3f3', padding:'10px 20px 10px 20px', borderRadius:6}}>
          <div>
            <Typography style={{fontSize:20, paddingBottom:10}}>Pago con tarjeta</Typography>
            <TextField
              label="Correo electronico"
              variant="outlined"
              size="small"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              style={{width:400}}
            />
          </div>
          <h3>Precioa pagar: {totalPrice}</h3>
          {allTickets &&
            allTickets?.map((t) => {
              return (
                <button
                  variant="outlined"
                  color="primary"
                  onClick={handleChecked}
                  name={t.numero}
                  id={t.precio}
                  value={t.id}
                  key={t.id}
                >
                  {t.numero}
                </button>
              );
            })}
          <CardElement />
          <button variant="contained" color="primary" disabled={!stripe}>
            Pagar
          </button>
          {message && <p>{message}</p>}
          <div>
            <Link to="/detail">volver</Link>
          </div>
        </form>
        <div style={{backgroundColor:'#f3f3f3', padding:'10px 20px 10px 20px', borderRadius:6}}>
          <Typography style={{fontSize:20}}>Tickets seleccionados</Typography>
          {selectedTickets?.map((t, i) => {
            return <h3 key={i}>{t}</h3>;
          })}
        </div>
      </section>
    </Grid>
  );
};

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}