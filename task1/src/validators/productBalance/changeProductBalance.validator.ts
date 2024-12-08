import { RequestHandler } from 'express';
import { validateOrReject } from 'class-validator';
import { ChangeProductBalanceDto } from '../../dto/productBalance/changeProductBalance.dto';
import { HttpStatus } from '../../utils/httpStatus';

export const changeProductBalanceValidator: RequestHandler<
  unknown,
  unknown,
  ChangeProductBalanceDto
> = async (req, res, next) => {
  if (!req.body) {
    res.sendStatus(HttpStatus.BadRequest);
    return;
  }

  const { productPlu, shopId, amount, forOrder } = req.body;

  const changes = new ChangeProductBalanceDto();
  changes.productPlu = productPlu;
  changes.shopId = shopId;
  changes.amount = amount;
  changes.forOrder = forOrder;

  try {
    await validateOrReject(changes);
    req.body = changes;
    next();
  } catch (error) {
    res.sendStatus(HttpStatus.BadRequest);
  }
};
