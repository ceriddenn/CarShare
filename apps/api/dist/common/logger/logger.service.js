"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const _ = require("lodash");
const common_1 = require("@nestjs/common");
const request_context_1 = require("../utils/request-context");
let LoggerService = class LoggerService extends common_1.Logger {
    constructor() {
        super();
        this.formatError = (error) => {
            if (!error) {
                return {};
            }
            if (typeof error === 'string') {
                return {
                    error,
                };
            }
            return {
                error: {
                    message: error.message,
                    stack: error.stack,
                },
            };
        };
        this.getData = (data) => {
            const [shortMessage, longMessage, extraInfo] = data;
            const correlationId = request_context_1.default.get('correlationId');
            const user = request_context_1.default.get('user');
            const info = {};
            if (correlationId) {
                info['correlationId'] = correlationId;
            }
            if (user) {
                info['user'] = user;
            }
            if (_.isPlainObject(shortMessage)) {
                return [
                    '',
                    _.assign({}, { ...shortMessage, ...this.formatError(shortMessage.error) }, info),
                ];
            }
            if (_.isPlainObject(longMessage)) {
                return [
                    shortMessage,
                    _.assign({}, { ...longMessage, ...this.formatError(longMessage.error) }, info),
                ];
            }
            if (_.isPlainObject(extraInfo)) {
                return [
                    shortMessage,
                    longMessage,
                    _.assign({}, { ...extraInfo, ...this.formatError(extraInfo.error) }, info),
                ];
            }
            return [...data, info];
        };
        this.logHandler = (level, data) => {
            try {
                const processedData = this.getData(data);
                console.log(level, ...processedData);
            }
            catch (error) {
                console.error(error);
            }
        };
    }
    info(...message) {
        this.logHandler('info', message);
    }
    error(...message) {
        this.logHandler('error', message);
    }
    debug(...message) {
        this.logHandler('debug', message);
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
//# sourceMappingURL=logger.service.js.map