import { RequestHandler } from 'express';
import { validateOrReject } from 'class-validator';
import { GetProductBalanceByQueryFiltersDto } from '../../dto/productBalance/getProductBalanceByQueryFilters.dto';
import { HttpStatus } from '../../utils/httpStatus';

export const getProductBalanceByFiltersValidator: RequestHandler<
  unknown,
  unknown,
  unknown,
  GetProductBalanceByQueryFiltersDto
> = async (req, res, next) => {
  if (!req.query) {
    res.sendStatus(HttpStatus.BadRequest);
    return;
  }

  const query = new GetProductBalanceByQueryFiltersDto();

  query.productPlu = req.query.productPlu && Number(req.query.productPlu);

  query.shopId = req.query.shopId && Number(req.query.shopId);

  query.countFrom = req.query.countFrom && Number(req.query.countFrom);

  query.countTo = req.query.countTo && Number(req.query.countTo);

  query.orderCountFrom =
    req.query.orderCountFrom && Number(req.query.orderCountFrom);

  query.orderCountTo = req.query.orderCountTo && Number(req.query.orderCountTo);

  const isBadCountValue =
    query.countFrom !== undefined &&
    query.countTo !== undefined &&
    query.countTo < query.countFrom;

  const isBadOrderCountValue =
    query.orderCountFrom !== undefined &&
    query.orderCountTo !== undefined &&
    query.orderCountTo < query.orderCountFrom;

  if (isBadCountValue || isBadOrderCountValue) {
    res.sendStatus(HttpStatus.BadRequest);
    return;
  }

  try {
    await validateOrReject(query);
    req.query = query;
    next();
  } catch (error) {
    res.sendStatus(HttpStatus.BadRequest);
  }
};
