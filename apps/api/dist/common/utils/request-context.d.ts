import { Request, Response } from 'express';
export default class RequestContext {
    static bind(req: Request, res: Response): void;
    static get<T>(key: string): T | null;
    static set<T>(key: string, value: T): void;
}
