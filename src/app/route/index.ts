import express from 'express';
import serviceRouter from '../moduile/services/service.route';
import paymentRoute from '../moduile/Payment/payment.route';
import userRouter from '../moduile/user/user.route';
import authRouter from '../moduile/auth/auth.route';
import cartRouter from '../moduile/cart/cart.route';
import orderRouter from '../moduile/orders/order.route';

const router = express.Router();

const routes = [
  {
    path: '/services',
    route: serviceRouter,
  },
  {
    path: '/payments',
    route: paymentRoute,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/cart',
    route: cartRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
