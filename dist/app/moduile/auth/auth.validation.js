"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const loginValidation = zod_1.default.object({
    body: zod_1.default.object({
        email: zod_1.default.string(),
        password: zod_1.default.string(),
    }),
});
exports.authValidation = { loginValidation };