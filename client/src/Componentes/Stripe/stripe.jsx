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

const stripePromise = loadStripe(
  "pk_test_51KqHrdFIWQ9P9UeS0BNcqq35rXRsXE6uQT0s3qWLIWI1eIvffpupJ781Cflga6GjiGcsYJZQRaLGo1AHrmR4nZF000iEqZdKf7"
);
const CheckoutForm = () => {
  const [film, setFilm] = useState({});
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [idTickets, setIdTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const user = useSelector((state) => state.userInfo);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedTickets, setSelectedTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3001/movies/id/${id}`);
      const movieId = result.data.data;
      setAllTickets([...result.data.data.tickets]);
      setFilm(movieId);
    }

    fetchData();
  }, [id]);

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
          comprador_email: user.email
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
    <div>
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
        <h3>Precioa pagar: {totalPrice}</h3>
        {allTickets &&
          allTickets?.map((t) => {
            return (
              <button
                onClick={handleChecked}
                name={t.numero}
                id={t.precio}
                value={t.id}
              >
                {t.numero}
              </button>
            );
          })}
        <CardElement />
        <button disabled={!stripe}>Pagar</button>
        {message && <p>{message}</p>}
        <div>
          <Link to="/detail">volver</Link>
        </div>
      </form>
      <h3>Tickets seleccionados</h3>
      {selectedTickets?.map((t) => {
        return <h3>{t}</h3>;
      })}
    </div>
  );
};

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
