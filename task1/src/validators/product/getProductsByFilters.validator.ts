import { RequestHandler } from 'express';
import { validateOrReject } from 'class-validator';
import { GetProductsByQueryFiltersDto } from '../../dto/product/getProductsByQueryFilters.dto';
import { HttpStatus } from '../../utils/httpStatus';

export const getProductsByFiltersValidator: RequestHandler<
  unknown,
  unknown,
  unknown,
  GetProductsByQueryFiltersDto
> = async (req, res, next) => {
  const { plu, name } = req.query;

  const query = new GetProductsByQueryFiltersDto();
  query.plu = plu;
  query.name = name;

  try {
    await validateOrReject(query);
    req.query = query;
    console.log('REQ QUERY AFTER VALIDATING: ', req.query);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(HttpStatus.BadRequest);
  }
};
