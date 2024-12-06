"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionApiServiceConfig = void 0;
const ORIGIN = process.env.ACTIONS_API_ORIGIN;
if (!ORIGIN) {
    throw new Error('NO API ORIGIN DATA');
}
exports.actionApiServiceConfig = {
    origin: ORIGIN,
    endpoints: {
        ['/history']: {
            method: "POST" /* HttpMethod.Post */
        }
    }
};
