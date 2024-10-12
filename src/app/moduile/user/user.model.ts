import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    isDeleted: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const User = model<TUser>('User', UserSchema);
