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
exports.userControlar = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_services_1 = require("./user.services");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_services_1.userServices.createUser(req.body);
    res.send({
        success: true,
        message: 'User Registration successfull',
        data,
    });
}));
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_services_1.userServices.getAllUser();
    res.send({
        success: true,
        message: 'User are retrived  successfull',
        data,
    });
}));
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield user_services_1.userServices.getSingleUser(id);
    res.send({
        success: true,
        message: 'User is retrived  successfull',
        data,
    });
}));
exports.userControlar = { createUser, getAllUser, getSingleUser };
