"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartValidation = void 0;
const zod_1 = require("zod");
const createCartValidaiton = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string(),
        service: zod_1.z.string(),
        quantity: zod_1.z.number(),
        email: zod_1.z.string(),
    }),
});
const updateCartValidaiton = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string().optional(),
        service: zod_1.z.string().optional(),
        quantity: zod_1.z.number().optional(),
        email: zod_1.z.string().optional(),
    }),
});
exports.cartValidation = { createCartValidaiton, updateCartValidaiton };
