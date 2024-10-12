// app.post('/payment-post-api', verifyJwt, async (req, res) => {
//   const { price } = req.body;
//   const amount = price * 100;
//   if (amount > 0) {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });
//     res.send({ clientSecret: paymentIntent.client_secret });
//   }
// });

import { config } from '../../config';
const stripe = require('stripe')(config.stripe_pb_key);
import { TPayment } from './payment.interface';

const payment = async (payload: TPayment) => {
  const { price } = payload;
  console.log(payload);
  const amount = price * 100;
  if (amount > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return { clientSecret: paymentIntent.client_secret };
  }
};

export const paymentService = { payment };
