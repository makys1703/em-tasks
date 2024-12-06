import { RequestHandler } from 'express';
import { productBalanceRepository } from '../repositories/productBalance.repository';
import { actionService } from '../services/action.service';
import { CreateProductBalanceDto } from '../dto/productBalance/createProductBalance.dto';
import { ProductBalanceDto } from '../dto/productBalance/productBalance.dto';
import { ChangeProductBalanceDto } from '../dto/productBalance/changeProductBalance.dto';
import { GetProductBalanceByQueryFiltersDto } from '../dto/productBalance/getProductBalanceByQueryFilters.dto';
import { ProductBalanceByQueryFiltersDto } from '../dto/productBalance/productBalanceByQueryFilters.dto';
import { HttpStatus } from '../utils/httpStatus';
import { actionTypeCreator } from '../utils/actionTypeCreator';

class ProductBalanceController {
  createProductBalance: RequestHandler<
    unknown,
    ProductBalanceDto,
    CreateProductBalanceDto,
    unknown
  > = async (req, res, next) => {
    try {
      const productBalance =
        await productBalanceRepository.createProductBalance(req.body);

      const actionProductBalance = await actionService.createProductBalance(
        actionTypeCreator.createProductBalance(),
        productBalance
      );

      console.log('actionProductBalance:', actionProductBalance);
      res.status(HttpStatus.Created);
      res.json(productBalance);
    } catch (error: unknown) {
      next(error);
    }
  };

  increaseProductBalance: RequestHandler<
    unknown,
    ProductBalanceDto,
    ChangeProductBalanceDto,
    unknown
  > = async (req, res, next) => {
    try {
      const productBalance =
        await productBalanceRepository.increaseProductBalance(req.body);

      const actionProductBalance = await actionService.createProductBalance(
        actionTypeCreator.increaseProductBalance(
          req.body.forOrder,
          req.body.amount,
          req.body.forOrder ? productBalance.orderCount : productBalance.count
        ),
        productBalance
      );

      console.log('actionProductBalance:', actionProductBalance);
      res.status(HttpStatus.Created);
      res.json(productBalance);
    } catch (error: unknown) {
      next(error);
    }
  };

  decreaseProductBalance: RequestHandler<
    unknown,
    ProductBalanceDto,
    ChangeProductBalanceDto,
    unknown
  > = async (req, res, next) => {
    try {
      const productBalance =
        await productBalanceRepository.decreaseProductBalance(req.body);

      const actionProductBalance = await actionService.createProductBalance(
        actionTypeCreator.decreaseProductBalance(
          req.body.forOrder,
          req.body.amount,
          req.body.forOrder ? productBalance.orderCount : productBalance.count
        ),
        productBalance
      );

      console.log('actionProductBalance:', actionProductBalance);
      res.status(HttpStatus.Created);
      res.json(productBalance);
    } catch (error: unknown) {
      next(error);
    }
  };

  getProductBalanceByFilters: RequestHandler<
    unknown,
    ProductBalanceByQueryFiltersDto[],
    unknown,
    GetProductBalanceByQueryFiltersDto
  > = async (req, res, next) => {
    try {
      const productBalance =
        await productBalanceRepository.getProductBalanceByFilters(req.query);

      if (!productBalance.length) {
        res.sendStatus(HttpStatus.NotFound);
        return;
      }

      res.json(productBalance);
    } catch (error: unknown) {
      next(error);
    }
  };
}

export const productBalanceController = new ProductBalanceController();
