import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrdersByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};
const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

export const orderServices = { createOrder, getAllOrders, getAllOrdersByEmail };
