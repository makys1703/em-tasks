import { ActionApiServiceEndpoints } from '../types/actionApiServiceEndpoints.type';
import { ActionApiServiceConfig } from '../types/actionApiServiceConfig.type';
import { actionApiServiceConfig } from '../configs/actionApiService.config';
import { actionApiServiceErrors } from '../errors/actionApiService.errors';
import { HttpMethod } from '../utils/httpMethod';
import { ActionRequest } from '../types/actionRequest.type';

export class ActionApiService {
  origin: string;
  endpoints: ActionApiServiceEndpoints;

  async checkConnection() {
    console.log('[CHECK ACTION API CONNECTION]');

    Object.keys(this.endpoints).forEach(async (endpoint) => {
      const url = new URL(endpoint, this.origin);

      const response = await fetch(url, { method: HttpMethod.Options });
      console.log(`[ ${endpoint} ] STATUS: `, response.status);

      if (!response.ok) {
        throw new Error(actionApiServiceErrors.statusCheck(endpoint));
      }
    });
  }

  async send({ endpoint, body }: ActionRequest) {
    if (!this.endpoints[endpoint]) {
      throw new Error(actionApiServiceErrors.incorrectEndpoint(endpoint));
    }

    const { method } = this.endpoints[endpoint];

    const url = new URL(endpoint, this.origin);

    const response = await fetch(url, {
      method,
      headers: {
        ['content-type']: 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(actionApiServiceErrors.send());
    }

    return response;
  }

  constructor({ origin, endpoints }: ActionApiServiceConfig) {
    this.origin = origin;
    this.endpoints = endpoints;

    this.checkConnection();
  }
}

export const actionApiService = new ActionApiService(actionApiServiceConfig);
