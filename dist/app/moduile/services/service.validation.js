"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createServiceSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().min(1, 'Service name is required'),
        image: zod_1.default.string(),
        price: zod_1.default.string(),
        currency: zod_1.default.string(),
        description: zod_1.default
            .string()
            .min(10, 'Description should be at least 10 characters'),
        category: zod_1.default.string().min(1, 'Category is required'),
    }),
});
exports.serviceValidation = { createServiceSchema };
