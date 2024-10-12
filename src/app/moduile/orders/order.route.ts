import express from 'express';
import { orderValidation } from './order.validation';
import validateRequest from '../../middleware/validateRequest';
import { orderControlar } from './order.controlar';
const orderRouter = express.Router();

orderRouter.post(
  '/',
  validateRequest(orderValidation.createOrderValidation),
  orderControlar.createOrder
);
orderRouter.post('/', orderControlar.getAllOrders);
orderRouter.post('/:email', orderControlar.getAllOrdersByEmail);
export default orderRouter;
