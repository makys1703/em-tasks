const ERROR_TITLE = 'Action API connection error';

export const actionApiServiceErrors = {
  statusCheck: (endpoint: string) =>
    `${ERROR_TITLE} -> cannot connect to endpoint [ ${endpoint} ]`,

  incorrectEndpoint: (endpoint: string) =>
    `${ERROR_TITLE} -> incorrectEndpoint [ ${endpoint} ]`,

  send: () => `${ERROR_TITLE} -> cannot send action data`
};
