"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControlar = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const order_services_1 = require("./order.services");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ordersInfo = req.body;
    const data = yield order_services_1.orderServices.createOrder(ordersInfo);
    res.send({
        success: true,
        message: 'Order Successfull',
        data,
    });
}));
const getAllOrdersByEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const data = yield order_services_1.orderServices.getAllOrdersByEmail(email);
    res.send({
        success: true,
        message: 'Orders are retrived successfull',
        data,
    });
}));
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_services_1.orderServices.getAllOrders();
    res.send({
        success: true,
        message: 'Order are retrived Successfull',
        data,
    });
}));
exports.orderControlar = {
    createOrder,
    getAllOrders,
    getAllOrdersByEmail,
};
