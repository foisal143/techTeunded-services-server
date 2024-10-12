"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_route_1 = __importDefault(require("../moduile/services/service.route"));
const payment_route_1 = __importDefault(require("../moduile/Payment/payment.route"));
const user_route_1 = __importDefault(require("../moduile/user/user.route"));
const auth_route_1 = __importDefault(require("../moduile/auth/auth.route"));
const cart_route_1 = __importDefault(require("../moduile/cart/cart.route"));
const order_route_1 = __importDefault(require("../moduile/orders/order.route"));
const router = express_1.default.Router();
const routes = [
    {
        path: '/services',
        route: service_route_1.default,
    },
    {
        path: '/payments',
        route: payment_route_1.default,
    },
    {
        path: '/users',
        route: user_route_1.default,
    },
    {
        path: '/auth',
        route: auth_route_1.default,
    },
    {
        path: '/cart',
        route: cart_route_1.default,
    },
    {
        path: '/orders',
        route: order_route_1.default,
    },
];
routes.forEach(({ path, route }) => {
    router.use(path, route);
});
exports.default = router;
