import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);



app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
