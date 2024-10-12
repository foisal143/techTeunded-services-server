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

export const serviceServices = {
  createService,
  getAllService,
  getSingleService,
};
