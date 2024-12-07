import { httpStatus } from '../utils/httpStatus.utils.mjs';

export function errorHandlerMiddleware(err, req, res, next) {
  console.log('errorHandlerMiddleware -> catched');

  if (err) {
    console.error(err);
    res.sendStatus(httpStatus.serverError);
  }
}
