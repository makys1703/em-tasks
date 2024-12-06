"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionTypeCreator = void 0;
exports.actionTypeCreator = {
    createProduct: () => 'API: create product',
    createProductBalance: () => 'API: create product balance',
    increaseProductBalance: (forOrder, amount, result) => forOrder
        ? `API: increase order product balance by ${amount} => ${result}`
        : `API: increase product balance by ${amount} => ${result}`,
    decreaseProductBalance: (forOrder, amount, result) => forOrder
        ? `API: decrease order product balance by ${amount} => ${result}`
        : `API: decrease product balance by ${amount} => ${result}`
};
