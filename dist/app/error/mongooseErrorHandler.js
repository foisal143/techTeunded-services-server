"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseErrorHandler = (error) => {
    var _a, _b, _c, _d;
    const errorSources = [
        {
            path: (_b = (_a = error === null || error === void 0 ? void 0 : error.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.path,
            message: (_d = (_c = error === null || error === void 0 ? void 0 : error.errors) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.message,
        },
    ];
    return {
        message: 'Academic Departemnt Validation Error!',
        statusCode: 403,
        errorSources,
    };
};
exports.default = mongooseErrorHandler;
