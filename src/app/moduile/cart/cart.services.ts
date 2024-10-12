import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { Service } from '../services/servic.model';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';
import { ObjectId } from 'mongodb';

const createCart = async (payload: ICart) => {
  const isServiceExist = await Service.findById(payload.service);
  if (!isServiceExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }
  const result = await Cart.create(payload);
  return result;
};

const getAllCart = async (email: string) => {
  const result = await Cart.find({ email }).populate('service');
  return result;
};

const updateCart = async (id: string, payload: { quantity: string }) => {
  const result = await Cart.findByIdAndUpdate(id, {
    quantity: payload.quantity,
  });
  return result;
};

const deleteCart = async (id: string) => {
  const result = await Cart.deleteOne({ _id: new ObjectId(id) });
  return result;
};

const deleteManyCart = async (ids: string[]) => {
  const filterids = ids.map(id => new ObjectId(id));
  const filter = { _id: { $in: filterids } };
  const result = await Cart.deleteMany(filter);
  return result;
};

export const cartServices = {
  createCart,
  getAllCart,
  updateCart,
  deleteCart,
  deleteManyCart,
};
