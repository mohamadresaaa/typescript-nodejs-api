import { ErrorRequestHandler } from 'express';
import { PublicErrorMessage, ErrorMessage } from './messages';

export const api404ErrorHandler: ErrorRequestHandler = (req, res, next: any) => {
    try {
        throw new PublicErrorMessage(new ErrorMessage('not found', 404));
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