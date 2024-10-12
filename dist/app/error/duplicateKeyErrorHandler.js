"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const duplicateKeyErrorHandler = (error) => {
    var _a;
    const errorSources = [
        {
            path: (_a = error === null || error === void 0 ? void 0 : error.keyValue) === null || _a === void 0 ? void 0 : _a.name,
            message: error === null || error === void 0 ? void 0 : error.errmsg,
        },
    ];
    return {
        message: `Duplicate name found of ${error === null || error === void 0 ? void 0 : error.keyValue.name} `,
        statusCode: 403,
        errorSources,
    };
};
exports.default = duplicateKeyErrorHandler;
