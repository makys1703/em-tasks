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
exports.productBalanceRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProductBalanceRepository {
    createProductBalance(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('REPO: createProductBalance dto: ', data);
                return yield prisma.productBalance.create({
                    data: Object.assign(Object.assign({}, data), { shopId: data.shopId, count: 0, orderCount: 0 })
                });
            }
            finally {
                console.log('FINALLY CALLBACK');
                prisma.$disconnect();
            }
        });
    }
    increaseProductBalance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ amount, productPlu, shopId, forOrder }) {
            try {
                return yield prisma.productBalance.update({
                    data: {
                        count: {
                            increment: forOrder ? 0 : amount
                        },
                        orderCount: {
                            increment: forOrder ? amount : 0
                        }
                    },
                    where: {
                        productPlu_shopId: {
                            productPlu: productPlu,
                            shopId: shopId
                        }
                    }
                });
            }
            finally {
                console.log('FINALLY CALLBACK');
                prisma.$disconnect();
            }
        });
    }
    decreaseProductBalance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ amount, productPlu, shopId, forOrder }) {
            try {
                return yield prisma.productBalance.update({
                    data: {
                        count: {
                            decrement: forOrder ? 0 : amount
                        },
                        orderCount: {
                            decrement: forOrder ? amount : 0
                        }
                    },
                    where: {
                        productPlu_shopId: {
                            productPlu: productPlu,
                            shopId: shopId
                        }
                    }
                });
            }
            finally {
                console.log('FINALLY CALLBACK');
                prisma.$disconnect();
            }
        });
    }
    getProductBalanceByFilters(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.productBalance.findMany({
                    where: {
                        productPlu: filters.productPlu && {
                            equals: filters.productPlu
                        },
                        shopId: filters.shopId && {
                            equals: filters.shopId
                        },
                        count: filters.countFrom !== undefined || filters.countTo !== undefined
                            ? {
                                lte: filters.countTo,
                                gte: filters.countFrom
                            }
                            : undefined,
                        orderCount: filters.orderCountFrom !== undefined ||
                            filters.orderCountTo !== undefined
                            ? {
                                gte: filters.orderCountFrom,
                                lte: filters.orderCountTo ? filters.orderCountTo : undefined
                            }
                            : undefined
                    },
                    select: {
                        productPlu: true,
                        shopId: true,
                        count: true,
                        orderCount: true,
                        product: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        count: 'desc'
                    }
                });
            }
            finally {
                console.log('FINALLY CALLBACK');
                prisma.$disconnect();
            }
        });
    }
}
exports.productBalanceRepository = new ProductBalanceRepository();
