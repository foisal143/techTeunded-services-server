import express from 'express';
import { paymentControlar } from './payment.controlar';

const paymentRoute = express.Router();

paymentRoute.post('/', paymentControlar.payments);
export default paymentRoute;
