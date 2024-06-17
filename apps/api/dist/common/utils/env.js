"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVariableOptional = exports.getEnvVariable = void 0;
const getEnvVariable = (variableName) => {
    if (process.env[variableName]) {
        return process.env[variableName];
    }
    throw new Error(`${variableName} not found in ENV`);
};
exports.getEnvVariable = getEnvVariable;
const getEnvVariableOptional = (variableName) => {
    if (process.env[variableName]) {
        return process.env[variableName];
    }
};
exports.getEnvVariableOptional = getEnvVariableOptional;
//# sourceMappingURL=env.js.map