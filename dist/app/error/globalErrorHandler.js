"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zodErrorHandler_1 = __importDefault(require("./zodErrorHandler"));
const mongooseErrorHandler_1 = __importDefault(require("./mongooseErrorHandler"));
const castErrorHandler_1 = __importDefault(require("./castErrorHandler"));
const duplicateKeyErrorHandler_1 = __importDefault(require("./duplicateKeyErrorHandler"));
const AppError_1 = __importDefault(require("./AppError"));
const globalErrorHandler = (error, req, res, next) => {
    var _a, _b, _c;
    let message = 'somthing went wrong!';
    let statusCode = 500;
    let errorSources = [
        {
            path: '',
            message,
        },
    ];
    if (error instanceof zod_1.ZodError) {
        const simplifiedError = (0, zodErrorHandler_1.default)(error);
        message = simplifiedError.message;
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources;
    }
    else if (((_b = (_a = error === null || error === void 0 ? void 0 : error.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.name) === 'ValidatorError') {
        const simplifiedError = (0, mongooseErrorHandler_1.default)(error);
        message = simplifiedError.message;
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources;
    }
    else if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') {
        const simplifiedError = (0, castErrorHandler_1.default)(error);
        message = simplifiedError.message;
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources;
    }
    else if (((_c = error === null || error === void 0 ? void 0 : error.errorResponse) === null || _c === void 0 ? void 0 : _c.code) === 11000) {
        const simplifiedError = (0, duplicateKeyErrorHandler_1.default)(error);
        message = simplifiedError.message;
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources;
    }
    else if (error instanceof AppError_1.default) {
        message = error.message;
        statusCode = error.statusCode;
        errorSources = [
            {
                path: '',
                message: error.message,
            },
        ];
    }
    else if (error instanceof Error) {
        message = error.message;
        errorSources = [
            {
                path: '',
                message: error.message,
            },
        ];
    }
    else {
        message = error === null || error === void 0 ? void 0 : error.message;
    }
    res.status(statusCode).send({
        success: false,
        message,
        errorSources,
    });
};
exports.default = globalErrorHandler;
