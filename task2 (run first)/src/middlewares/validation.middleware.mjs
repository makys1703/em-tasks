import { validationResult } from 'express-validator';
import { httpStatus } from '../utils/httpStatus.utils.mjs';

export function validationMiddleware(req, res, next) {
  if (!validationResult(req).isEmpty()) {
    res.sendStatus(httpStatus.badRequest);
    return;
  }

  next();
}
