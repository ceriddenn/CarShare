import { Logger } from '@nestjs/common';
export declare class LoggerService extends Logger {
    constructor();
    private formatError;
    private getData;
    private logHandler;
    info(...message: any): void;
    error(...message: any): void;
    debug(...message: any): void;
}
