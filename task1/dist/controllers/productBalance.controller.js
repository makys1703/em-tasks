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
exports.productBalanceController = void 0;
const productBalance_repository_1 = require("../repositories/productBalance.repository");
const action_service_1 = require("../services/action.service");
const actionTypeCreator_1 = require("../utils/actionTypeCreator");
class ProductBalanceController {
    constructor() {
        this.createProductBalance = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productBalance = yield productBalance_repository_1.productBalanceRepository.createProductBalance(req.body);
                const actionProductBalance = yield action_service_1.actionService.createProductBalance(actionTypeCreator_1.actionTypeCreator.createProductBalance(), productBalance);
                console.log('actionProductBalance:', actionProductBalance);
                res.status(201 /* HttpStatus.Created */);
                res.json(productBalance);
            }
            catch (error) {
                next(error);
            }
        });
        this.increaseProductBalance = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productBalance = yield productBalance_repository_1.productBalanceRepository.increaseProductBalance(req.body);
                const actionProductBalance = yield action_service_1.actionService.createProductBalance(actionTypeCreator_1.actionTypeCreator.increaseProductBalance(req.body.forOrder, req.body.amount, req.body.forOrder ? productBalance.orderCount : productBalance.count), productBalance);
                console.log('actionProductBalance:', actionProductBalance);
                res.status(201 /* HttpStatus.Created */);
                res.json(productBalance);
            }
            catch (error) {
                next(error);
            }
        });
        this.decreaseProductBalance = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productBalance = yield productBalance_repository_1.productBalanceRepository.decreaseProductBalance(req.body);
                const actionProductBalance = yield action_service_1.actionService.createProductBalance(actionTypeCreator_1.actionTypeCreator.decreaseProductBalance(req.body.forOrder, req.body.amount, req.body.forOrder ? productBalance.orderCount : productBalance.count), productBalance);
                console.log('actionProductBalance:', actionProductBalance);
                res.status(201 /* HttpStatus.Created */);
                res.json(productBalance);
            }
            catch (error) {
                next(error);
            }
        });
        this.getProductBalanceByFilters = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productBalance = yield productBalance_repository_1.productBalanceRepository.getProductBalanceByFilters(req.query);
                if (!productBalance.length) {
                    res.sendStatus(404 /* HttpStatus.NotFound */);
                    return;
                }
                res.json(productBalance);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.productBalanceController = new ProductBalanceController();
