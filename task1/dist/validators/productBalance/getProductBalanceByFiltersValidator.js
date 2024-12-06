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
exports.getProductBalanceByFiltersValidator = void 0;
const class_validator_1 = require("class-validator");
const getProductBalanceByQueryFilters_dto_1 = require("../../dto/productBalance/getProductBalanceByQueryFilters.dto");
const getProductBalanceByFiltersValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query) {
        res.sendStatus(400 /* HttpStatus.BadRequest */);
        return;
    }
    const query = new getProductBalanceByQueryFilters_dto_1.GetProductBalanceByQueryFiltersDto();
    query.productPlu = req.query.productPlu && Number(req.query.productPlu);
    query.shopId = req.query.shopId && Number(req.query.shopId);
    query.countFrom = req.query.countFrom && Number(req.query.countFrom);
    query.countTo = req.query.countTo && Number(req.query.countTo);
    query.orderCountFrom =
        req.query.orderCountFrom && Number(req.query.orderCountFrom);
    query.orderCountTo = req.query.orderCountTo && Number(req.query.orderCountTo);
    const isBadCountValue = query.countFrom !== undefined &&
        query.countTo !== undefined &&
        query.countTo < query.countFrom;
    const isBadOrderCountValue = query.orderCountFrom !== undefined &&
        query.orderCountTo !== undefined &&
        query.orderCountTo < query.orderCountFrom;
    if (isBadCountValue || isBadOrderCountValue) {
        console.log('VALIDATING: BAD COUNT VALUES', req.query);
        res.sendStatus(400 /* HttpStatus.BadRequest */);
        return;
    }
    try {
        yield (0, class_validator_1.validateOrReject)(query);
        req.query = query;
        console.log('REQ QUERY AFTER VALIDATING: ', req.query);
        next();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400 /* HttpStatus.BadRequest */);
    }
});
exports.getProductBalanceByFiltersValidator = getProductBalanceByFiltersValidator;
