import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
const login = async (payload: TLogin) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (user.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User alredy deleted');
  }
  const jwtPayload = { email: user.email, role: user.role };
  const token = jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: '10d',
  });
  return { user, token };
};

export const authServices = { login };
