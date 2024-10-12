import catchAsinc from '../../utils/catchAsync';
import { orderServices } from './order.services';

const createOrder = catchAsinc(async (req, res) => {
  const ordersInfo = req.body;
  const data = await orderServices.createOrder(ordersInfo);
  res.send({
    success: true,
    message: 'Order Successfull',
    data,
  });
});
const getAllOrdersByEmail = catchAsinc(async (req, res) => {
  const email = req.params.email;
  const data = await orderServices.getAllOrdersByEmail(email);
  res.send({
    success: true,
    message: 'Orders are retrived successfull',
    data,
  });
});
const getAllOrders = catchAsinc(async (req, res) => {
  const data = await orderServices.getAllOrders();
  res.send({
    success: true,
    message: 'Order are retrived Successfull',
    data,
  });
});

export const orderControlar = {
  createOrder,
  getAllOrders,
  getAllOrdersByEmail,
};
