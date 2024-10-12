"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
// Zod schema for TUser
const createuserValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name is required').max(100, 'Name is too long'),
        email: zod_1.z.string().email('Invalid email address'),
        phone: zod_1.z
            .string()
            .min(10, 'Phone number should be at least 10 digits')
            .max(15, 'Phone number is too long'),
        role: zod_1.z.enum(['user', 'admin', 'moderator']).default('user'), // Assuming these roles
        isDeleted: zod_1.z.boolean().default(false),
        password: zod_1.z.string().min(8, 'Password must be at least 8 characters long'),
    }),
});
exports.userValidation = { createuserValidation };
