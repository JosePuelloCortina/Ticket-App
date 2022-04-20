const { Router } = require("express");
const stripe = require('stripe');
//const { Stripe} = require("../db");

const stripeRute = Router();

const stripe = new Stripe('sk_test_51KqHrdFIWQ9P9UeS7vSiszaCmgiP8ANklgurJaZXDwy8lDDiMF8rznKRafbOXOZEXWU9kjykYOfMrwkKigtJ97Ck00SHpCO8bv')

stripeRute.get('/', async(req,res)=>{
 const { id }=req.body;
 res.send('todos los pagos')
})

stripeRute.post('/pago', async  (req,res)=>{
    try{
        const { id, amount }=req.body
        const payment= await stripe.paymentIntents.create({
            amount,
            currency:'USD',
            description: 'ticket cinema',
            payment_method: id,
            confirm: true
        })
        console.log(payment)
        res.send({message: 'pago recibido'})
    }catch(error){
        console.log(error)
        res.json({message:'error'})
    }
})
