import { z } from 'zod';

const createCartValidaiton = z.object({
  body: z.object({
    user: z.string(),
    service: z.string(),
    quantity: z.number(),
    email: z.string(),
  }),
});
const updateCartValidaiton = z.object({
  body: z.object({
    user: z.string().optional(),
    service: z.string().optional(),
    quantity: z.number().optional(),
    email: z.string().optional(),
  }),
});

export const cartValidation = { createCartValidaiton, updateCartValidaiton };
