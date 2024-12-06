import { Router } from 'express';
import { Routes } from '../utils/routes';
import { productBalanceController } from '../controllers/productBalance.controller';
import { jsonParserMiddleware } from '../middlewares/jsonParser.middleware';
import { createProductBalanceValidator } from '../validators/productBalance/createProductBalance.validator';
import { getProductBalanceByFiltersValidator } from '../validators/productBalance/getProductBalanceByFiltersValidator';
import { changeProductBalanceValidator } from '../validators/productBalance/changeProductBalance.validator';

export const productBalanceRouter = Router();

productBalanceRouter.get(
  Routes.productBalance,
  getProductBalanceByFiltersValidator,
  productBalanceController.getProductBalanceByFilters
);

productBalanceRouter.post(
  Routes.productBalance,
  jsonParserMiddleware,
  createProductBalanceValidator,
  productBalanceController.createProductBalance
);

productBalanceRouter.put(
  `${Routes.productBalance}/increase`,
  jsonParserMiddleware,
  changeProductBalanceValidator,
  productBalanceController.increaseProductBalance
);
productBalanceRouter.put(
  `${Routes.productBalance}/decrease`,
  jsonParserMiddleware,
  changeProductBalanceValidator,
  productBalanceController.decreaseProductBalance
);
