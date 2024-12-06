"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionApiServiceErrors = void 0;
const ERROR_TITLE = 'Action API connection error';
exports.actionApiServiceErrors = {
    statusCheck: (endpoint, status) => `${ERROR_TITLE}: [ ${endpoint} ] got status ${status}`,
    incorrectEndpoint: (endpoint) => `${ERROR_TITLE}: incorrectEndpoint [ ${endpoint} ]`,
    send: () => `${ERROR_TITLE}: cannot send action data`
};
