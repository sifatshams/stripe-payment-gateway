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

// API to create checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              images: [product.image],
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ],

      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    // success res
    res.status(200).json({ success: true, url: session.url });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
