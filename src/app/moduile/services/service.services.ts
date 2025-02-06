import { Service } from './servic.model';
import { TService } from './service.interface';

const createService = async (payload: TService) => {
  const result = await Service.create(payload);
  return result;
};

const getAllService = async () => {
  const result = await Service.find();
  return result;
};

const getSingleService = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};
const updateServices = async (id: string, serviceIno: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(id, serviceIno);
  return result;
};
const deleteServices = async (id: string) => {
  const result = await Service.findByIdAndDelete(id);
  return result;
};

export const serviceServices = {
  createService,
  getAllService,
  getSingleService,
  updateServices,
  deleteServices,
};
