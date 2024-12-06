import { Router } from 'express';
import { Routes } from '../utils/routes';
import { productController } from '../controllers/product.controller';
import { jsonParserMiddleware } from '../middlewares/jsonParser.middleware';
import { transformQueryParamsMiddleware } from '../middlewares/transformQueryParams.middleware';
import { createProductValidator } from '../validators/product/createProduct.validator';
import { getProductsByFiltersValidator } from '../validators/product/getProductsByFilters.validator';

export const productRouter = Router();

productRouter.get(
  Routes.product,
  transformQueryParamsMiddleware,
  getProductsByFiltersValidator,
  productController.getProductsByFilters
);

productRouter.post(
  Routes.product,
  jsonParserMiddleware,
  createProductValidator,
  productController.createProduct
);
