import catchAsinc from '../../utils/catchAsync';
import { authServices } from './auth.services';

const login = catchAsinc(async (req, res) => {
  const data = await authServices.login(req.body);
  res.send({
    success: true,
    message: 'User Login successfull',
    data,
  });
});

export const authControlar = { login };
