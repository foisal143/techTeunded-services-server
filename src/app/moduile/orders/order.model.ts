import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String, required: false },
  country: { type: String, required: true },
  streetAddress: { type: String, required: true },
  apartment: { type: String, required: false },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  orderNotes: { type: String, required: false },
});

export const Order = model<TOrder>('Orders', orderSchema);
