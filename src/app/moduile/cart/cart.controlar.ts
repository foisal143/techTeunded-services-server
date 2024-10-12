import catchAsinc from '../../utils/catchAsync';
import { cartServices } from './cart.services';

const createCart = catchAsinc(async (req, res) => {
  const data = await cartServices.createCart(req.body);
  res.send({
    success: true,
    message: 'Service added successfull',
    data,
  });
});

const getAllCart = catchAsinc(async (req, res) => {
  const email = req.params.email;
  const data = await cartServices.getAllCart(email);
  res.send({
    success: true,
    message: 'Cart service are retrived  successfull',
    data,
  });
});
const updateCart = catchAsinc(async (req, res) => {
  const id = req.params.id;
  const data = await cartServices.updateCart(id, req.body);
  res.send({
    success: true,
    message: 'Cart quantity updated   successfull',
    data,
  });
});

const deleteCart = catchAsinc(async (req, res) => {
  const id = req.params.id;
  const data = await cartServices.deleteCart(id);
  res.send({
    success: true,
    message: 'Cart is deleted  successfull',
    data,
  });
});
const deleteManyCart = catchAsinc(async (req, res) => {
  const id = req.params.id;
  const ids = id.split(',');

  const data = await cartServices.deleteManyCart(ids);
  res.send({
    success: true,
    message: 'Cart is deleted  successfull',
    data,
  });
});
export const cartControlar = {
  createCart,
  getAllCart,
  updateCart,
  deleteCart,
  deleteManyCart,
};
