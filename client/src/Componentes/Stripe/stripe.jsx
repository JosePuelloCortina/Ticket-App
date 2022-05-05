import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { Divider, Grid, Typography } from "@material-ui/core";
import styleStripe from './stripe.module.css';
import butaca from '../../assets/butaca.png'

const stripePromise = loadStripe(
  "pk_test_51KqHrdFIWQ9P9UeS0BNcqq35rXRsXE6uQT0s3qWLIWI1eIvffpupJ781Cflga6GjiGcsYJZQRaLGo1AHrmR4nZF000iEqZdKf7"
);
const CheckoutForm = () => {
  const [film, setFilm] = useState({});
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { id: idParams } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [idTickets, setIdTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [listButacas, setlistButacas] = useState([]);
  const user = useSelector((state) => state.userInfo);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fondo, setFondo] = useState([]);
  const [salaCurrent, setSalaCurrent] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:3001/movies/id/${idParams}`
      );
      const movieId = result.data.data;
      setAllTickets([...result.data.data.tickets]);
      setFilm(movieId);
    }

    fetchData();
  }, [idParams]);

  useEffect(()=>{
    const filterForSala = allTickets?.filter(b => b.numero_sala === salaCurrent);
    filterForSala.sort((a, b) => {
      let A = a['numero'].toLowerCase().trim();
      let B = b['numero'].toLowerCase().trim();
      return A > B ? 1 : A < B ? -1 : 0;
    })
    setlistButacas(filterForSala);
    setFondo([]);
  }, [allTickets])

  const getTickets = async ()=>{
    const result = await axios.get(`http://localhost:3001/movies/id/${id}`);
    setAllTickets([...result.data.data.tickets]);
  };

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
        await getTickets();
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
        setMessage(error.message);
        setTimeout(() => setMessage(null), 5000);
      }
    }
    
    setEmail("".data);
  };

  const handleChecked = (e) => {
    e.preventDefault();
    setFondo({
      ...fondo,
      [e.target.name]: !fondo[e.target.name],
    });
    setIdTickets([...idTickets, e.target.value]);
    fondo[e.target.name] ? setTotalPrice(totalPrice - Number(e.target.id)) 
    : setTotalPrice(totalPrice + Number(e.target.id)); 
  };

  const handleChangeSala = (e) =>{
    setSalaCurrent(e.target.value);    
    const filterForSala = allTickets?.filter(b => b.numero_sala === e.target.value);
    filterForSala.sort((a, b) => {
      let A = a['numero'].toLowerCase().trim();
      let B = b['numero'].toLowerCase().trim();
      return A > B ? 1 : A < B ? -1 : 0;
    })
    setlistButacas(filterForSala);
  };

  const listarSalas = () =>{
    const aux = new Set();
    allTickets?.forEach((e)=>aux.add(e.numero_sala));
    return aux;
  }
  return (
    <Grid>
      <section style={{ padding: 20, display: "flex", flexWrap: "wrap", gap: 20, color: "gray" }}>
        <img src={film.image} alt={film.nombre} width={300} height={450} />
        <form onSubmit={handleSubmit} style={{backgroundColor:'#f3f3f3', padding:20, borderRadius:6}}>
          <div>
            <Typography variant="h5" style={{marginBottom:10}}>Disponible en sala</Typography>
            <select name="sala" onChange={handleChangeSala}
              style={{width:150, height:35, fontSize:16}}
            >
              <option value=''>Seleccionar</option>
              {[...listarSalas().values()].map((s,i) => <option key={i} value={s}>{s}</option>)}
            </select>
            <span style={{marginLeft:10}}>
              {listButacas[0] && `Fecha y hora : ${listButacas[0].fecha_hora.split('T')}`}
            </span>
          </div>
          <Divider style={{marginTop:10}}/>
          <Typography variant="h5" style={{margin:'10px 0px'}}>Butacas disponibles</Typography>          
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10, width:600}}>
          {listButacas &&
            listButacas?.map((t,i) => {
              return (
                <div key={i} style={{width:50, height:70, display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <button
                    className={fondo[t.numero] ? styleStripe.butacaSeleccionada : t.userId !== null ? styleStripe.butacaOcupada : styleStripe.butacaLibre }
                    onClick={handleChecked}
                    name={t.numero}
                    id={t.precio}
                    value={t.id}
                    key={t.id}
                    disabled={t.userId !== null ? true : false}
                    style={{backgroundImage:`url(${butaca})`}}
                  >
                  </button>
                  <span style={{textAlign:'center', width:'100%', backgroundColor:'white', borderRadius:'0px 0px 5px 5px'}}>
                    {t.numero}
                  </span>
                </div>
              );
            })}
          </div>
          <Divider style={{margin:'10px 5px'}}/>
          <Typography variant="h5" style={{margin:'10px 0px'}}>
            Precio a pagar: <span style={{color:'red'}}>{`USD ${totalPrice}`}</span>
          </Typography>
          <Divider style={{margin:'10px 5px'}}/>
          <Typography variant="h5" style={{margin:'10px 0px'}}>Información de la tarjeta</Typography>
          <CardElement  />
          <Divider style={{margin:'10px 5px'}}/>
          <button variant="contained" color="primary" disabled={!stripe} style={{margin:'10px 0px', padding:'5px 13px'}}>
            Pagar
          </button>
          {message && <p>{message}</p>}
          <div>
            <Link to="/detail" style={{border:'1px solid gray',borderRadius:4, padding:'5px 10px', textDecoration:'none'}}>Volver</Link>
          </div>
        </form>
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
