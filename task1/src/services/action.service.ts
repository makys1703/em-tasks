import { ActionDto } from '../dto/action/action.dto';
import { ProductDto } from '../dto/product/product.dto';
import { ProductBalanceDto } from '../dto/productBalance/productBalance.dto';
import { actionApiService } from './actionApi.service';

export class ActionService {
  async createProduct(actionType: string, product: ProductDto) {
    const action = new ActionDto();
    action.plu = product.plu;
    action.date = new Date();
    action.action = actionType;

    try {
      return await actionApiService.send({
        endpoint: '/history',
        body: action
      });
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async createProductBalance(
    actionType: string,
    productBalance: ProductBalanceDto
  ) {
    const action = new ActionDto();
    action.plu = productBalance.productPlu;
    action.shopId = productBalance.shopId;
    action.date = new Date();
    action.action = actionType;

    try {
      return await actionApiService.send({
        endpoint: '/history',
        body: action
      });
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export const actionService = new ActionService();
