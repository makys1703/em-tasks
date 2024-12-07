import { ErrorRequestHandler } from 'express';
import { HttpStatus } from '../utils/httpStatus';

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  console.error('ERROR HANDLER -> catched');
  
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.error(err);
  }

  res.sendStatus(HttpStatus.ServerError);
};
