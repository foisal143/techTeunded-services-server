"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const config_1 = require("../../config");
const stripe = require('stripe')(config_1.config.stripe_pb_key);
const payment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { price } = payload;
    console.log(payload);
    const amount = price * 100;
    if (amount > 0) {
        const paymentIntent = yield stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        return { clientSecret: paymentIntent.client_secret };
    }
});
exports.paymentService = { payment };
