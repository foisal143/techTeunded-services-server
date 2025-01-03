"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./app/route"));
const globalErrorHandler_1 = __importDefault(require("./app/error/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/error/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        'https://tech-tuned-services-frontend.vercel.app',
        'http://localhost:5173',
        'https://seoideaplanet.com',
    ],
    credentials: true,
}));
app.use('/api', route_1.default);
app.get('/', (req, res) => {
    res.send('techtuend servics data is comming...');
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
