"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const user_controlar_1 = require("./user.controlar");
const userRouter = express_1.default.Router();
userRouter.post('/', (0, validateRequest_1.default)(user_validation_1.userValidation.createuserValidation), user_controlar_1.userControlar.createUser);
userRouter.get('/', user_controlar_1.userControlar.getAllUser);
userRouter.get('/:id', user_controlar_1.userControlar.getSingleUser);
exports.default = userRouter;
