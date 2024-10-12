import mongoose, { Document, model, Model, Schema } from 'mongoose';
import { TService } from './service.interface';

// Define a Mongoose schema for the Service
const serviceSchema = new Schema<TService>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  currency: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

export const Service = model<TService>('Service', serviceSchema);
// Create and export the Mongoose model for the Service
