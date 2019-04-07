import { ErrorMessage } from "./messages";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const contentType: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if (req.accepts('application/json'))
        next();
    else
        next(new ErrorMessage("server just supports 'application/json' content type", 400));
};