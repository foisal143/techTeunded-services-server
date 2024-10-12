import { z } from 'zod';

const createOrderValidation = z.object({
  body: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    companyName: z.string().optional(),
    country: z.string().min(1, 'Country/Region is required'),
    streetAddress: z.string().min(1, 'Street address is required'),
    apartment: z.string().optional(),
    city: z.string().min(1, 'Town/City is required'),
    state: z.string().min(1, 'State is required'),
    zipCode: z.string().min(1, 'ZIP Code is required'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z
      .string()
      .email('Invalid email format')
      .min(1, 'Email address is required'),
    orderNotes: z.string().optional(),
  }),
});

export const orderValidation = { createOrderValidation };
