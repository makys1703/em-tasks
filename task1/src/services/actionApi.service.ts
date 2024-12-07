import { ActionApiServiceEndpoints } from '../types/actionApiServiceEndpoints.type';
import { ActionApiServiceConfig } from '../types/actionApiServiceConfig.type';
import { actionApiServiceConfig } from '../configs/actionApiService.config';
import { actionApiServiceErrors } from '../errors/actionApiService.errors';
import { HttpStatus } from '../utils/httpStatus';
import { HttpMethod } from '../utils/httpMethod';

type ActionRequest<B, Q> = {
  endpoint: string;
  body?: B extends object ? object : undefined;
  queryParams?: Q extends Record<string, string>
    ? Record<string, string>
    : undefined;
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

  async send<B extends object, Q extends Record<string, string>>({
    endpoint,
    body,
    queryParams
  }: ActionRequest<B, Q>) {
    if (!this.endpoints[endpoint]) {
      throw new Error(actionApiServiceErrors.incorrectEndpoint(endpoint));
    }

    const { method } = this.endpoints[endpoint];

    const url = new URL(endpoint ?? '/', this.origin);

    if (queryParams && Object.keys(queryParams)) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

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
