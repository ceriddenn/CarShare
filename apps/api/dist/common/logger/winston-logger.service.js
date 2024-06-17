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
exports.WinstonLogger = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const winston = require("winston");
let WinstonLogger = class WinstonLogger {
    constructor(configService) {
        this.configService = configService;
        const appName = this.configService.get('appName');
        const transports = [
            new winston.transports.Console({
                level: 'info',
                format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
            }),
        ];
        winston.loggers.add('access-log', {
            defaultMeta: { service: appName },
            transports,
        });
    }
    get logger() {
        return winston.loggers.get('access-log');
    }
    check() {
        return 'ok';
    }
};
exports.WinstonLogger = WinstonLogger;
exports.WinstonLogger = WinstonLogger = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WinstonLogger);
//# sourceMappingURL=winston-logger.service.js.map