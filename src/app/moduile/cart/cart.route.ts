import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { cartValidation } from './cart.validation';
import { cartControlar } from './cart.controlar';
const cartRouter = express.Router();

cartRouter.post(
  '/',
  validateRequest(cartValidation.createCartValidaiton),
  cartControlar.createCart
);

cartRouter.get('/:email', cartControlar.getAllCart);
cartRouter.patch(
  '/:id',
  validateRequest(cartValidation.updateCartValidaiton),
  cartControlar.updateCart
);

cartRouter.delete('/all/:id', cartControlar.deleteManyCart);

cartRouter.delete('/:id', cartControlar.deleteCart);
export default cartRouter;
