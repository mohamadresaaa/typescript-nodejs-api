import { ErrorRequestHandler } from 'express';

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