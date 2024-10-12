"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const zodErrorHandler = (error) => {
    const errorSources = error === null || error === void 0 ? void 0 : error.issues.map(issue => {
        var _a;
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[((_a = issue === null || issue === void 0 ? void 0 : issue.path) === null || _a === void 0 ? void 0 : _a.length) - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    return {
        errorSources,
        statusCode: http_status_1.default.BAD_REQUEST,
        message: 'Validation Error',
    };
};
exports.default = zodErrorHandler;
