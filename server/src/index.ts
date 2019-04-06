import express from 'express';
import { createServer } from 'http';
import { NextFunction } from 'connect';

export default class Core {
    // define properties
    app: any;

    // give value to properties
    constructor() {
        this.app = express();
    }

    // run all methods
    async start() {
        await this.setupExpress();
        await this.setupRoutes();
    }

    // setup express server
    setupExpress() {
        let server = createServer(this.app);
        server.listen(process.env.PORT || 3000, () => (console.log('server started...')));
    }

    setupRoutes() {
        this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
            console.log('ok');
        });
    }

};