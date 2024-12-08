import { ErrorRequestHandler } from 'express';
import { HttpStatus } from '../utils/httpStatus';

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.error(err);
  }

  res.sendStatus(HttpStatus.ServerError);
};
