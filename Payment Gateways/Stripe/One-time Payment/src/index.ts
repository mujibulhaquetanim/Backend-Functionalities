import express, { Request, Response } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
  path: './env'
});
const app = express();

const PORT = process.env.PORT || 3000;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(STRIPE_SECRET_KEY!);
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/create-checkout-intent", async(req: Request, res: Response) => {
  try {
    const {items}= req.body;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
