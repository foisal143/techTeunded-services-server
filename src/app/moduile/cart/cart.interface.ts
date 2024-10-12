import { Types } from 'mongoose';
import { TService } from '../services/service.interface';

export interface ICart {
  user: Types.ObjectId;
  service: Types.ObjectId;
  quantity: number;
  email: string;
}
