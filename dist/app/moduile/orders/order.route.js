"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_validation_1 = require("./order.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const order_controlar_1 = require("./order.controlar");
const orderRouter = express_1.default.Router();
orderRouter.post('/', (0, validateRequest_1.default)(order_validation_1.orderValidation.createOrderValidation), order_controlar_1.orderControlar.createOrder);
orderRouter.post('/', order_controlar_1.orderControlar.getAllOrders);
orderRouter.post('/:email', order_controlar_1.orderControlar.getAllOrdersByEmail);
exports.default = orderRouter;
