import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from './user.validation';
import { userControlar } from './user.controlar';
const userRouter = express.Router();

userRouter.post(
  '/',
  validateRequest(userValidation.createuserValidation),
  userControlar.createUser
);

userRouter.get('/', userControlar.getAllUser);
userRouter.get('/:id', userControlar.getSingleUser);
export default userRouter;