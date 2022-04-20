import React from "react";
import { loadStripe} from '@stripe/stripe-js';
import {CardElement, 
    Elements, 
    useStripe, 
    useElements 
} from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51KqHrdFIWQ9P9UeS0BNcqq35rXRsXE6uQT0s3qWLIWI1eIvffpupJ781Cflga6GjiGcsYJZQRaLGo1AHrmR4nZF000iEqZdKf7')
const CheckoutForm=()=>{
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit= async(e)=>{
        e.preventDefault();

       const {error, paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        })
        if(!error){
            console.log(paymentMethod)
            const {id} = paymentMethod
            const {data} = await axios.post('http://localhost:3001/stripe/pago',{
                id,
                amount: 10000,
            })
            console.log(data)
         }
    }
    return <form onSubmit={handleSubmit}>
    <h3>Precio: $100</h3>
    <div>
    <CardElement/>
    </div>
    <button> pago </button>
    </form>
}


export default function Stripe(){
    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm/>
        </Elements>
    )
}