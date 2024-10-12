"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = require("zod");
const createOrderValidation = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(1, 'First name is required'),
        lastName: zod_1.z.string().min(1, 'Last name is required'),
        companyName: zod_1.z.string().optional(),
        country: zod_1.z.string().min(1, 'Country/Region is required'),
        streetAddress: zod_1.z.string().min(1, 'Street address is required'),
        apartment: zod_1.z.string().optional(),
        city: zod_1.z.string().min(1, 'Town/City is required'),
        state: zod_1.z.string().min(1, 'State is required'),
        zipCode: zod_1.z.string().min(1, 'ZIP Code is required'),
        phone: zod_1.z.string().min(1, 'Phone number is required'),
        email: zod_1.z
            .string()
            .email('Invalid email format')
            .min(1, 'Email address is required'),
        orderNotes: zod_1.z.string().optional(),
    }),
});
exports.orderValidation = { createOrderValidation };
