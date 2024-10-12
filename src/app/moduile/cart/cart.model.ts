import { model, Schema } from 'mongoose';
import { ICart } from './cart.interface';

const cartSchema = new Schema<ICart>({
  user: { type: Schema.Types.ObjectId, required: true },
  service: { type: Schema.Types.ObjectId, required: true, ref: 'Service' },
  quantity: { type: Number, required: true },
  email: { type: String, required: true },
});

export const Cart = model<ICart>('Cart', cartSchema);
