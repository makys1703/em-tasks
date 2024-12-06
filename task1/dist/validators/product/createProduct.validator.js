"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductValidator = void 0;
const class_validator_1 = require("class-validator");
const createProduct_dto_1 = require("../../dto/product/createProduct.dto");
const createProductValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { plu, name } = req.body;
    const product = new createProduct_dto_1.CreateProductDto();
    product.plu = plu;
    product.name = name === null || name === void 0 ? void 0 : name.trim();
    try {
        yield (0, class_validator_1.validateOrReject)(product);
        req.body = product;
        next();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400 /* HttpStatus.BadRequest */);
    }
});
exports.createProductValidator = createProductValidator;
