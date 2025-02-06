import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user alredy exist');
  }

  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find({ isDeleted: false });
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const deleteUser = async (email: string) => {
  const result = await User.findOneAndUpdate({ email }, { isDeleted: true });
  return result;
};
const makeAdmin = async (email: string) => {
  const result = await User.findOneAndUpdate({ email }, { role: 'admin' });
  return result;
};
export const userServices = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  makeAdmin,
};
