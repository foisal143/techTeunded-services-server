"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const cart_validation_1 = require("./cart.validation");
const cart_controlar_1 = require("./cart.controlar");
const cartRouter = express_1.default.Router();
cartRouter.post('/', (0, validateRequest_1.default)(cart_validation_1.cartValidation.createCartValidaiton), cart_controlar_1.cartControlar.createCart);
cartRouter.get('/:email', cart_controlar_1.cartControlar.getAllCart);
cartRouter.patch('/:id', (0, validateRequest_1.default)(cart_validation_1.cartValidation.updateCartValidaiton), cart_controlar_1.cartControlar.updateCart);
cartRouter.delete('/all/:id', cart_controlar_1.cartControlar.deleteManyCart);
cartRouter.delete('/:id', cart_controlar_1.cartControlar.deleteCart);
exports.default = cartRouter;
