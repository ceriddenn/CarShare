import { Request, Response, NextFunction } from 'express';
export declare function setContext(appName: string): (req: Request, res: Response, next: NextFunction) => void;
