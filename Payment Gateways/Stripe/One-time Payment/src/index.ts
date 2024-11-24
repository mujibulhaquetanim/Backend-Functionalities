import express, { Request, Response } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
import { CartItem, PaymentResponse } from "./types/types";

dotenv.config({
  path: './.env'
});

const app = express();
const PORT = process.env.PORT || 3000;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/create-checkout-intent", async(req: Request, res: Response) => {
  try {
    const {items}: {items:CartItem[]} = req.body;
    const amount = items.reduce((acc:number, item:CartItem)=> acc + item.price*item.quantity, 0);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
