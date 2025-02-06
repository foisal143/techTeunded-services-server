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
const deleteUser = catchAsinc(async (req, res) => {
  const email = req.params.email;
  const data = await userServices.deleteUser(email);
  res.send({
    success: true,
    message: 'User is deleted  successfull',
    data,
  });
});
const makeAdmin = catchAsinc(async (req, res) => {
  const email = req.params.email;
  const data = await userServices.makeAdmin(email);
  res.send({
    success: true,
    message: 'User is promoted to admin ',
    data,
  });
});

export const userControlar = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  makeAdmin,
};
