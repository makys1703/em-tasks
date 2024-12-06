"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionApiService = exports.ActionApiService = void 0;
const actionApiService_config_1 = require("../configs/actionApiService.config");
const actionApiService_errors_1 = require("../errors/actionApiService.errors");
class ActionApiService {
    checkConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[CHECK ACTION API CONNECTION]');
            Object.keys(this.endpoints).forEach((endpoint) => __awaiter(this, void 0, void 0, function* () {
                const url = new URL(endpoint, this.origin);
                const response = yield fetch(url, { method: "OPTIONS" /* HttpMethod.Options */ });
                console.log(`[ ${endpoint} ] STATUS: `, response.status);
                if (response.status !== 200) {
                    throw new Error(actionApiService_errors_1.actionApiServiceErrors.statusCheck(endpoint, String(response.status)));
                }
            }));
        });
    }
    send(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, body, queryParams }) {
            if (!this.endpoints[endpoint]) {
                throw new Error(actionApiService_errors_1.actionApiServiceErrors.incorrectEndpoint(endpoint));
            }
            const { method } = this.endpoints[endpoint];
            const url = new URL(endpoint !== null && endpoint !== void 0 ? endpoint : '/', this.origin);
            if (queryParams && Object.keys(queryParams)) {
                Object.entries(queryParams).forEach(([key, value]) => {
                    url.searchParams.append(key, value);
                });
            }
            const response = yield fetch(url, {
                method,
                headers: {
                    ['content-type']: 'application/json; charset=utf-8'
                },
                body: JSON.stringify(body)
            });
            console.log('RESPONSE IN PUSH:', response);
            if (response.status !== 201 /* HttpStatus.Created */ &&
                response.status !== 200 /* HttpStatus.Ok */) {
                throw new Error(actionApiService_errors_1.actionApiServiceErrors.send());
            }
            return response;
        });
    }
    constructor({ origin, endpoints }) {
        this.origin = origin;
        this.endpoints = endpoints;
        this.checkConnection();
    }
}
exports.ActionApiService = ActionApiService;
exports.actionApiService = new ActionApiService(actionApiService_config_1.actionApiServiceConfig);
