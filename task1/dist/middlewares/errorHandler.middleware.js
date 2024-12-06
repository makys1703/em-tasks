"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error('ERROR HANDLER -> catched');
    console.error(err);
    res.sendStatus(500 /* HttpStatus.ServerError */);
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
