import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { serviceValidation } from './service.validation';
import { servicControlar } from './service.controlar';
const serviceRouter = express.Router();

serviceRouter.post(
  '/',
  validateRequest(serviceValidation.createServiceSchema),
  servicControlar.createService
);
serviceRouter.get('/', servicControlar.getAllService);
serviceRouter.get('/:serviceId', servicControlar.getSingleService);
export default serviceRouter;
