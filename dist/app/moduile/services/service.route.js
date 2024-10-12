"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const service_validation_1 = require("./service.validation");
const service_controlar_1 = require("./service.controlar");
const serviceRouter = express_1.default.Router();
serviceRouter.post('/', (0, validateRequest_1.default)(service_validation_1.serviceValidation.createServiceSchema), service_controlar_1.servicControlar.createService);
serviceRouter.get('/', service_controlar_1.servicControlar.getAllService);
serviceRouter.get('/:serviceId', service_controlar_1.servicControlar.getSingleService);
exports.default = serviceRouter;
