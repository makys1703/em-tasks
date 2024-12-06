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
exports.createProductBalanceValidator = void 0;
const class_validator_1 = require("class-validator");
const createProductBalance_dto_1 = require("../../dto/productBalance/createProductBalance.dto");
const createProductBalanceValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.sendStatus(400 /* HttpStatus.BadRequest */);
        return;
    }
    const { productPlu, shopId } = req.body;
    const productBalance = new createProductBalance_dto_1.CreateProductBalanceDto();
    productBalance.productPlu = productPlu;
    productBalance.shopId = shopId;
    try {
        yield (0, class_validator_1.validateOrReject)(productBalance);
        req.body = productBalance;
        next();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400 /* HttpStatus.BadRequest */);
    }
});
exports.createProductBalanceValidator = createProductBalanceValidator;
