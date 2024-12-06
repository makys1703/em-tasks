"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaErrorHandler = prismaErrorHandler;
const library_1 = require("@prisma/client/runtime/library");
function prismaErrorHandler(error) {
    console.log('PrismaErrorHandler -> catched');
    if (error instanceof library_1.PrismaClientValidationError ||
        error instanceof library_1.PrismaClientKnownRequestError ||
        error instanceof library_1.PrismaClientUnknownRequestError) {
        console.error(error.message);
    }
}
