const { Router } = require("express");
const stripe = require('stripe')('sk_test_51KqHrdFIWQ9P9UeS7vSiszaCmgiP8ANklgurJaZXDwy8lDDiMF8rznKRafbOXOZEXWU9kjykYOfMrwkKigtJ97Ck00SHpCO8bv');
//const { Stripe} = require("../db");
const cors = require('cors');

const stripeRute = Router();
//llave secreta
//const stripe = new Stripe('sk_test_51KqHrdFIWQ9P9UeS7vSiszaCmgiP8ANklgurJaZXDwy8lDDiMF8rznKRafbOXOZEXWU9kjykYOfMrwkKigtJ97Ck00SHpCO8bv')

// stripeRute.get('/', async(req,res)=>{
//  const { id }=req.params;
//  res.send('pago')
// })

stripeRute.post('/pago', async  (req,res)=>{
    try{
        //const  infopago = req.body
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

module.exports= stripeRute;