import { RequestHandler } from 'express';
import { validateOrReject } from 'class-validator';
import { CreateProductBalanceDto } from '../../dto/productBalance/createProductBalance.dto';
import { HttpStatus } from '../../utils/httpStatus';

export const createProductBalanceValidator: RequestHandler<
  unknown,
  unknown,
  CreateProductBalanceDto
> = async (req, res, next) => {
  if (!req.body) {
    res.sendStatus(HttpStatus.BadRequest);
    return;
  }

  const { productPlu, shopId } = req.body;

  const productBalance = new CreateProductBalanceDto();
  productBalance.productPlu = productPlu;
  productBalance.shopId = shopId;

  try {
    await validateOrReject(productBalance);
    req.body = productBalance;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(HttpStatus.BadRequest);
  }
};
