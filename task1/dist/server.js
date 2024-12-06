"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./routes/product.routes");
const productBalance_routes_1 = require("./routes/productBalance.routes");
const errorHandler_middleware_1 = require("./middlewares/errorHandler.middleware");
const app = (0, express_1.default)();
app.use(product_routes_1.productRouter);
app.use(productBalance_routes_1.productBalanceRouter);
app.use(errorHandler_middleware_1.errorHandlerMiddleware);
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
