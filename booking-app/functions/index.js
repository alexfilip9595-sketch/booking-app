const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const stripe = new Stripe("AICI_PUI_SECRET_KEY_STRIPE");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

exports.api = functions.https.onRequest(app);