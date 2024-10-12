import z from 'zod';

const createServiceSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Service name is required'),
    image: z.string(),
    price: z.string(),
    currency: z.string(),
    description: z
      .string()
      .min(10, 'Description should be at least 10 characters'),
    category: z.string().min(1, 'Category is required'),
  }),
});

export const serviceValidation = { createServiceSchema };
