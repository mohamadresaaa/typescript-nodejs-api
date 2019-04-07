import { ErrorMessage } from "./messages";
import { RequestHandler, Request, Response, NextFunction } from "express";

// just allow application/json content type
export const contentType: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if (req.accepts('application/json'))
        next();
    else
        next(new ErrorMessage("server just supports 'application/json' content type", 400));
};

// set access control allow
export const cors: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    });
    next();
};