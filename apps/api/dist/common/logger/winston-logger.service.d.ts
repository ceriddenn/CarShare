import { ConfigService } from '@nestjs/config';
import winston = require('winston');
export declare class WinstonLogger {
    private configService;
    constructor(configService: ConfigService);
    get logger(): winston.Logger;
    check(): string;
}
