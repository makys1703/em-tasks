import { RequestHandler } from 'express';
import { productRepository } from '../repositories/product.repository';
import { actionService } from '../services/action.service';
import { CreateProductDto } from '../dto/product/createProduct.dto';
import { ProductDto } from '../dto/product/product.dto';
import { GetProductsByQueryFiltersDto } from '../dto/product/getProductsByQueryFilters.dto';
import { HttpStatus } from '../utils/httpStatus';
import { actionTypeCreator } from '../utils/actionTypeCreator';

class ProductController {
  createProduct: RequestHandler<
    unknown,
    ProductDto,
    CreateProductDto,
    unknown
  > = async (req, res, next) => {
    try {
      const product = await productRepository.createProduct(req.body);
      await actionService.createProduct(
        actionTypeCreator.createProduct(),
        product
      );

      res.status(HttpStatus.Created);
      res.json(product);
    } catch (error: unknown) {
      next(error);
    }
  };

  getProductsByFilters: RequestHandler<
    unknown,
    ProductDto[],
    unknown,
    GetProductsByQueryFiltersDto
  > = async (req, res, next) => {
    try {
      const products = await productRepository.getProductsByFilters(req.query);

      if (!products.length) {
        res.sendStatus(HttpStatus.NotFound);
        return;
      }

      res.json(products);
    } catch (error: unknown) {
      next(error);
    }
  };
}

export const productController = new ProductController();
