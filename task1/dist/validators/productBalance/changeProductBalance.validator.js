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
exports.changeProductBalanceValidator = void 0;
const class_validator_1 = require("class-validator");
const changeProductBalance_dto_1 = require("../../dto/productBalance/changeProductBalance.dto");
const changeProductBalanceValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.sendStatus(400 /* HttpStatus.BadRequest */);
        return;
    }
    const { productPlu, shopId, amount, forOrder } = req.body;
    const changes = new changeProductBalance_dto_1.ChangeProductBalanceDto();
    changes.productPlu = productPlu;
    changes.shopId = shopId;
    changes.amount = amount;
    changes.forOrder = forOrder;
    try {
        yield (0, class_validator_1.validateOrReject)(changes);
        req.body = changes;
        next();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400 /* HttpStatus.BadRequest */);
    }
});
exports.changeProductBalanceValidator = changeProductBalanceValidator;
