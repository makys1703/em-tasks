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
exports.productController = void 0;
const product_repository_1 = require("../repositories/product.repository");
const action_service_1 = require("../services/action.service");
const actionTypeCreator_1 = require("../utils/actionTypeCreator");
class ProductController {
    constructor() {
        this.createProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_repository_1.productRepository.createProduct(req.body);
                const productAction = yield action_service_1.actionService.createProduct(actionTypeCreator_1.actionTypeCreator.createProduct(), product);
                console.log('productAction: ', productAction);
                res.status(201 /* HttpStatus.Created */);
                res.json(product);
            }
            catch (error) {
                next(error);
            }
        });
        this.getProductsByFilters = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('CONTROLLER: getProductsByFilters', req.query);
                const products = yield product_repository_1.productRepository.getProductsByFilters(req.query);
                if (!products.length) {
                    res.sendStatus(404 /* HttpStatus.NotFound */);
                    return;
                }
                res.json(products);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.productController = new ProductController();
