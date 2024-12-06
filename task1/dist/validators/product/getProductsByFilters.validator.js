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
exports.getProductsByFiltersValidator = void 0;
const class_validator_1 = require("class-validator");
const getProductsByQueryFilters_dto_1 = require("../../dto/product/getProductsByQueryFilters.dto");
const getProductsByFiltersValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { plu, name } = req.query;
    if (!plu && !name) {
        console.log('EMPTY FILTERS');
        res.sendStatus(400 /* HttpStatus.BadRequest */);
        return;
    }
    const query = new getProductsByQueryFilters_dto_1.GetProductsByQueryFiltersDto();
    query.plu = plu;
    query.name = name;
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
exports.getProductsByFiltersValidator = getProductsByFiltersValidator;
