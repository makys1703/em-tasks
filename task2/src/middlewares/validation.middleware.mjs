import { validationResult } from 'express-validator';
import { httpStatus } from '../utils/httpStatus.utils.mjs';

export function validationMiddleware(req, res, next) {
  console.log('INPUT BODY: ', req.body);

  console.log('VALIDATION: ', validationResult(req).isEmpty());

  console.log(validationResult(req));

  if (!validationResult(req).isEmpty()) {
    res.sendStatus(httpStatus.badRequest);
    return;
  }

  next();
}
