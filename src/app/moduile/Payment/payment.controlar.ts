import catchAsinc from '../../utils/catchAsync';
import { paymentService } from './payment.services';

const payments = catchAsinc(async (req, res) => {
  const data = await paymentService.payment(req.body);
  console.log(req.body);
  res.send({
    success: true,
    message: 'Client scret is retrived successfull',
    data,
  });
});

export const paymentControlar = { payments };
