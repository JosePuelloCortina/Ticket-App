
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const { Ticket, Compra } = require("../db");

const app = express();
const stripeRute = express.Router();

app.use(express.json());
app.use(cors());

stripeRute.get("/", async (req, res) => {
  const { id } = req.body;
  res.send("todos los pagos");
});

stripeRute.post("/pago", async (req, res) => {
  try {
    const { id, amount, userId, idTickets, comprador_email } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "ticket cinema",
      payment_method: id,
      confirm: true,
    });

    const compra = await Compra.create({
      id: uuidv4(),
      comprador_email,
      amount: (amount / 100),
      cantidad_tickets: idTickets.length
    }); 
    
    idTickets.forEach(async ticket => {
      const ticketFinded = await Ticket.findOne({
        where: {
          id: ticket
        }
      });
      await ticketFinded.update({
        userId
      })
    });
    res.send({ message: "pago recibido" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

module.exports = stripeRute;
