"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapValidationErrors = mapValidationErrors;
function mapValidationErrors(error) {
    return Object.values(error.constraints).join('\n');
}
