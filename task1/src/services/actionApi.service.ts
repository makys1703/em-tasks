import { ActionApiServiceEndpoints } from '../types/actionApiServiceEndpoints.type';
import { ActionApiServiceConfig } from '../types/actionApiServiceConfig.type';
import { actionApiServiceConfig } from '../configs/actionApiService.config';
import { actionApiServiceErrors } from '../errors/actionApiService.errors';
import { HttpStatus } from '../utils/httpStatus';
import { HttpMethod } from '../utils/httpMethod';
import { ActionDto } from '../dto/action/action.dto';

type ActionRequest = {
  endpoint: string;
  body: ActionDto
};

export class ActionApiService {
  origin: string;
  endpoints: ActionApiServiceEndpoints;

  async checkConnection() {
    console.log('[CHECK ACTION API CONNECTION]');

    Object.keys(this.endpoints).forEach(async (endpoint) => {
      const url = new URL(endpoint, this.origin);

      const response = await fetch(url, { method: HttpMethod.Options });
      console.log(`[ ${endpoint} ] STATUS: `, response.status);

      if (response.status !== HttpStatus.Ok) {
        throw new Error(
          actionApiServiceErrors.statusCheck(endpoint, String(response.status))
        );
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

    if (
      response.status !== HttpStatus.Created &&
      response.status !== HttpStatus.Ok
    ) {
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
