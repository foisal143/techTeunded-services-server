import catchAsinc from '../../utils/catchAsync';
import { userServices } from './user.services';

const createUser = catchAsinc(async (req, res) => {
  const data = await userServices.createUser(req.body);
  res.send({
    success: true,
    message: 'User Registration successfull',
    data,
  });
});

const getAllUser = catchAsinc(async (req, res) => {
  const data = await userServices.getAllUser();
  res.send({
    success: true,
    message: 'User are retrived  successfull',
    data,
  });
});

const getSingleUser = catchAsinc(async (req, res) => {
  const id = req.params.id;
  const data = await userServices.getSingleUser(id);
  res.send({
    success: true,
    message: 'User is retrived  successfull',
    data,
  });
});

export const userControlar = { createUser, getAllUser, getSingleUser };
