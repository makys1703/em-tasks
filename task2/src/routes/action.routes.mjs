import { Router } from 'express';
import { jsonParserMiddleware } from '../middlewares/jsonParser.middleware.mjs';
import { validationMiddleware } from '../middlewares/validation.middleware.mjs';
import { transformQueryNumbersMiddleware } from '../middlewares/transformQueryNumbers.middleware.mjs';
import {
  createActionValidator,
  getActionsByFiltersValidator
} from '../validators/action.validators.mjs';
import { actionController } from '../controllers/action.controller.mjs';

export const actionRouter = Router();

const ENDPOINT = '/history';

actionRouter.get(
  ENDPOINT,
  transformQueryNumbersMiddleware,
  getActionsByFiltersValidator,
  validationMiddleware,
  actionController.getActionsByFilters
);

actionRouter.post(
  ENDPOINT,
  jsonParserMiddleware,
  createActionValidator,
  validationMiddleware,
  actionController.createAction
);
