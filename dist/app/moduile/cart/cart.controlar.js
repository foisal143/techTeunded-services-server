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
exports.cartControlar = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const cart_services_1 = require("./cart.services");
const createCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cart_services_1.cartServices.createCart(req.body);
    res.send({
        success: true,
        message: 'Service added successfull',
        data,
    });
}));
const getAllCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const data = yield cart_services_1.cartServices.getAllCart(email);
    res.send({
        success: true,
        message: 'Cart service are retrived  successfull',
        data,
    });
}));
const updateCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield cart_services_1.cartServices.updateCart(id, req.body);
    res.send({
        success: true,
        message: 'Cart quantity updated   successfull',
        data,
    });
}));
const deleteCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield cart_services_1.cartServices.deleteCart(id);
    res.send({
        success: true,
        message: 'Cart is deleted  successfull',
        data,
    });
}));
const deleteManyCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const ids = id.split(',');
    const data = yield cart_services_1.cartServices.deleteManyCart(ids);
    res.send({
        success: true,
        message: 'Cart is deleted  successfull',
        data,
    });
}));
exports.cartControlar = {
    createCart,
    getAllCart,
    updateCart,
    deleteCart,
    deleteManyCart,
};
