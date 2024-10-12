"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const auth_controlar_1 = require("./auth.controlar");
const authRouter = express_1.default.Router();
authRouter.post('/login', (0, validateRequest_1.default)(auth_validation_1.authValidation.loginValidation), auth_controlar_1.authControlar.login);
exports.default = authRouter;
