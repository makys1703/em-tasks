import { RequestHandler } from 'express';
import { validateOrReject } from 'class-validator';
import { CreateProductDto } from '../../dto/product/createProduct.dto';
import { HttpStatus } from '../../utils/httpStatus';

export const createProductValidator: RequestHandler<
  unknown,
  unknown,
  CreateProductDto
> = async (req, res, next) => {
  const { plu, name } = req.body;

  const product = new CreateProductDto();
  product.plu = plu;
  product.name = name?.trim();

  try {
    await validateOrReject(product);
    req.body = product;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(HttpStatus.BadRequest);
  }
};
