"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    db_url: process.env.DB_URL,
    port: process.env.PORT,
    jwt_access_token: process.env.JWT_ACCESS_TOKEN,
    stripe_pb_key: process.env.STRIPE_PB_KEY,
};
