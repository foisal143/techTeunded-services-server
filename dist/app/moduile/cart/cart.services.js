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
exports.cartServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const servic_model_1 = require("../services/servic.model");
const cart_model_1 = require("./cart.model");
const mongodb_1 = require("mongodb");
const createCart = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExist = yield servic_model_1.Service.findById(payload.service);
    if (!isServiceExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service not found');
    }
    const result = yield cart_model_1.Cart.create(payload);
    return result;
});
const getAllCart = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.find({ email }).populate('service');
    return result;
});
const updateCart = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndUpdate(id, {
        quantity: payload.quantity,
    });
    return result;
});
const deleteCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    return result;
});
const deleteManyCart = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const filterids = ids.map(id => new mongodb_1.ObjectId(id));
    const filter = { _id: { $in: filterids } };
    const result = yield cart_model_1.Cart.deleteMany(filter);
    return result;
});
exports.cartServices = {
    createCart,
    getAllCart,
    updateCart,
    deleteCart,
    deleteManyCart,
};
