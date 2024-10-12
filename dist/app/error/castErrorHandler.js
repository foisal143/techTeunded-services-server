"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const castErrorHandler = (error) => {
    const regex = /value "([^"]+)" \(/;
    const match = error.message.match(regex);
    const extractedValue = match[1];
    const errorSources = [
        {
            path: error.path,
            message: `Academic department it is not valid id:  ${extractedValue}` ||
                'Academic department invalid id',
        },
    ];
    return {
        message: 'Invalid id',
        statusCode: 403,
        errorSources,
    };
};
exports.default = castErrorHandler;
