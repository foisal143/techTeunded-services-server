"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const payment_controlar_1 = require("./payment.controlar");
const paymentRoute = express_1.default.Router();
paymentRoute.post('/', payment_controlar_1.paymentControlar.payments);
exports.default = paymentRoute;
