import { ErrorRequestHandler } from 'express';
import { PublicErrorMessage, ErrorMessage } from './messages';

export const api404ErrorHandler: ErrorRequestHandler = (req: any, res: any, next: any) => {
    try {
        throw new PublicErrorMessage(ErrorMessage.errNotFound());
    } catch (error) {
        next(error);
    }
};

export const apiErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    switch (req.app.get('env')) {
        case 'development':
            res.status(err.status).json(err);
            break;
        case 'production':
            // production logging
            res.status(err.status).json(err.publicVersion());
            break;
    }
};