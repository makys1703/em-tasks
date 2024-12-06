import { ActionApiServiceConfig } from '../types/actionApiServiceConfig.type';
import { HttpMethod } from '../utils/httpMethod';

const ORIGIN = process.env.ACTIONS_API_ORIGIN;

if (!ORIGIN) {
  throw new Error('NO API ORIGIN DATA');
}

export const actionApiServiceConfig: ActionApiServiceConfig = {
  origin: ORIGIN,
  endpoints: {
    ['/history']: {
      method: HttpMethod.Post
    }
  }
};
