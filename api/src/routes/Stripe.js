const { Router } = require("express");
const stripe = require('stripe');
//const { Stripe} = require("../db");

const stripe = Router();

const stripeKey = new stripeKey('sk_test_51KqHrdFIWQ9P9UeS7vSiszaCmgiP8ANklgurJaZXDwy8lDDiMF8rznKRafbOXOZEXWU9kjykYOfMrwkKigtJ97Ck00SHpCO8bv')

stripe.get('/', async(req,res)=>{
 const { id }=req.body;
 res.send('todos los pagos')
})

stripe.post('/pago', async  (req,res)=>{
    try{
        const { id, amount }=req.body
        const payment= await stripeKey.paymentIntents.create({
            amount,
            currency:'USD',
            descripcion: 'ticket cinema',
            payment_method: id,
            confirm: true
        })
        console.log(payment)
        res.send('pago recibido')
    }catch(error){
        console.log(error)
    }
})
