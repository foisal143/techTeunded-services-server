import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { authValidation } from './auth.validation';
import { authControlar } from './auth.controlar';

const authRouter = express.Router();
authRouter.post(
  '/login',
  validateRequest(authValidation.loginValidation),
  authControlar.login
);
export default authRouter;
