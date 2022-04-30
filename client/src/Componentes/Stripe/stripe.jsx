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

const stripePromise = loadStripe(
  "pk_test_51KqHrdFIWQ9P9UeS0BNcqq35rXRsXE6uQT0s3qWLIWI1eIvffpupJ781Cflga6GjiGcsYJZQRaLGo1AHrmR4nZF000iEqZdKf7"
);
const CheckoutForm = () => {
  const [film, setFilm] = useState({});
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { id: idParamns } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [idTickets, setIdTickets]=useState([]);
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3001/movies/id/${idParamns}`);
      const allTickets = await axios.get(`http://localhost:3001/ticket`);
      const movieId = result.data.data;
      setTickets([allTickets.data]);
      setFilm(movieId);
    }

    fetchData();
  }, [idParamns]);
console.log(tickets)

const handleChecked = (e)=>{
  e.preventDefault();
  setIdTickets([...idTickets, e.target.value])
}
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
          amount: film["tickets.precio"] * 100,
        });
        console.log(paymentMethod)
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

  return (
    <form onSubmit={handleSubmit}>
      <img src={film.image} alt={film.nombre} />
      <p>Correo Electrónico</p>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      <h3>Precio: {film["tickets.precio"]}</h3>
      <CardElement />
      <button disabled={!stripe}>Pagar</button>
      {message && <p>{message}</p>}
    <div>
      <Link to='/detail'>volver</Link>
      </div>

      <div>
      <label>
      {tickets.map((e)=>{
         return(
          <div>
            <input type='checkbox' 
            value={e.id}
            className="checkbox"
            onChange={handleChecked} >
            </input>
            <span>{e.numero}</span>
          </div> 
         )
      })}
      </label>
    </div>
    </form>
  );
};

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
