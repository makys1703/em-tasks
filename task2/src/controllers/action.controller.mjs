import { actionRepository } from '../repositories/action.repository.mjs';
import { httpStatus } from '../utils/httpStatus.utils.mjs';

class ActionController {
  async createAction(req, res, next) {
    try {
      const response = await actionRepository.createAction(req.body);
      res.status(httpStatus.created);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getActions(req, res, next) {
    try {
      const response = await actionRepository.getActions();

      if (!response.length) {
        res.sendStatus(httpStatus.notFound);
        return;
      }

      res.send(response);
    } catch (error) {
      next(error);
    }
  }

  async getActionsByFilters(req, res, next) {
    try {
      console.log('getActionsByFilters: ', req.query);
      const response = await actionRepository.getActionsByFilters(req.query);

      if (!response.length) {
        res.sendStatus(httpStatus.notFound);
        return;
      }

      res.send(response);
    } catch (error) {
      next(error);
    }
  }
}

export const actionController = new ActionController();
