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
exports.servicControlar = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const service_services_1 = require("./service.services");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceInfo = req.body;
    const data = yield service_services_1.serviceServices.createService(serviceInfo);
    res.send({
        success: true,
        message: 'Service Created successfull',
        data,
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_services_1.serviceServices.getAllService();
    res.send({
        success: true,
        message: 'Service are retrived  successfull',
        data,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.serviceId;
    const data = yield service_services_1.serviceServices.getSingleService(id);
    res.send({
        success: true,
        message: 'Service is retrived  successfull',
        data,
    });
}));
const updateServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.serviceId;
    const serviceInfo = req.body;
    const data = yield service_services_1.serviceServices.updateServices(id, serviceInfo);
    res.send({
        success: true,
        message: 'Service is updated  successfull',
        data,
    });
}));
const deleteServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.serviceId;
    const data = yield service_services_1.serviceServices.deleteServices(id);
    res.send({
        success: true,
        message: 'Service is deleted  successfull',
        data,
    });
}));
exports.servicControlar = {
    createService,
    getAllService,
    getSingleService,
    updateServices,
    deleteServices,
};
