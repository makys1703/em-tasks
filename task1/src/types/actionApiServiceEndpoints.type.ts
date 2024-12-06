import { HttpMethod } from '../utils/httpMethod';

type ActionApiServiceEndpoint = {
  method: HttpMethod;
};

export type ActionApiServiceEndpoints = {
  [endpoint: string]: ActionApiServiceEndpoint;
};
