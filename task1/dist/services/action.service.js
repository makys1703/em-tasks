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
exports.actionService = exports.ActionService = void 0;
const action_dto_1 = require("../dto/action/action.dto");
const actionApi_service_1 = require("./actionApi.service");
class ActionService {
    createProduct(actionType, product) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ActionService -> createProduct: ', product);
            const action = new action_dto_1.ActionDto();
            action.plu = product.plu;
            action.date = new Date();
            action.action = actionType;
            try {
                return yield actionApi_service_1.actionApiService.send({
                    endpoint: '/history',
                    body: action
                });
            }
            catch (error) {
                console.log('CATCHED -> ActionService');
                throw new Error(error);
            }
        });
    }
    createProductBalance(actionType, productBalance) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ActionService -> productBalance: ', productBalance);
            const action = new action_dto_1.ActionDto();
            action.plu = productBalance.productPlu;
            action.shopId = productBalance.shopId;
            action.date = new Date();
            action.action = actionType;
            try {
                return yield actionApi_service_1.actionApiService.send({
                    endpoint: '/history',
                    body: action
                });
            }
            catch (error) {
                console.log('CATCHED -> ActionService');
                throw new Error(error);
            }
        });
    }
}
exports.ActionService = ActionService;
exports.actionService = new ActionService();
