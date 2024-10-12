import { z } from 'zod';

// Zod schema for TUser
const createuserValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .min(10, 'Phone number should be at least 10 digits')
      .max(15, 'Phone number is too long'),
    role: z.enum(['user', 'admin', 'moderator']).default('user'), // Assuming these roles
    isDeleted: z.boolean().default(false),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
  }),
});

export const userValidation = { createuserValidation };
