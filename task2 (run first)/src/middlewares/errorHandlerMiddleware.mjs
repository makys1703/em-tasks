import { httpStatus } from '../utils/httpStatus.utils.mjs';

export function errorHandlerMiddleware(err, req, res, next) {
  if (err) {
    console.error(err);
    res.sendStatus(httpStatus.serverError);
  }
}
