
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require("cors");

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
    const { id, amount, userId, idTickets } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "ticket cinema",
      payment_method: id,
      confirm: true,
    });
    
    idTickets.forEach(ticket => {
      const ticketFinded = await ticket.findOne({
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
