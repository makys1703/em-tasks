const ERROR_TITLE = 'Action API connection error';

export const actionApiServiceErrors = {
  statusCheck: (endpoint: string, status: string) =>
    `${ERROR_TITLE}: [ ${endpoint} ] got status ${status}`,

  incorrectEndpoint: (endpoint: string) =>
    `${ERROR_TITLE}: incorrectEndpoint [ ${endpoint} ]`,

  send: () => `${ERROR_TITLE}: cannot send action data`
};
