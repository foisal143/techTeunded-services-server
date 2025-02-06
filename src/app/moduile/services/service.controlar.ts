import catchAsinc from '../../utils/catchAsync';
import { serviceServices } from './service.services';

const createService = catchAsinc(async (req, res) => {
  const serviceInfo = req.body;
  const data = await serviceServices.createService(serviceInfo);
  res.send({
    success: true,
    message: 'Service Created successfull',
    data,
  });
});

const getAllService = catchAsinc(async (req, res) => {
  const data = await serviceServices.getAllService();
  res.send({
    success: true,
    message: 'Service are retrived  successfull',
    data,
  });
});

const getSingleService = catchAsinc(async (req, res) => {
  const id = req.params.serviceId;
  const data = await serviceServices.getSingleService(id);
  res.send({
    success: true,
    message: 'Service is retrived  successfull',
    data,
  });
});
const updateServices = catchAsinc(async (req, res) => {
  const id = req.params.serviceId;
  const serviceInfo = req.body;
  const data = await serviceServices.updateServices(id, serviceInfo);
  res.send({
    success: true,
    message: 'Service is updated  successfull',
    data,
  });
});
const deleteServices = catchAsinc(async (req, res) => {
  const id = req.params.serviceId;
  const data = await serviceServices.deleteServices(id);
  res.send({
    success: true,
    message: 'Service is deleted  successfull',
    data,
  });
});

export const servicControlar = {
  createService,
  getAllService,
  getSingleService,
  updateServices,
  deleteServices,
};
