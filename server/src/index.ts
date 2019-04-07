import bodyParser from 'body-parser';
import { createServer } from 'http';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import router from './router';
import { apiErrorHandler, api404ErrorHandler } from './lib/errorHandling';

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
        await this.configuration();
        await this.setupRoutes();
    }

    // setup express server
    setupExpress() {
        let server = createServer(this.app);
        server.listen(process.env.PORT || 3000, () => (console.log('server started...')));
    }

    configuration() {
        // helmet
        this.app.use(helmet());

        // cors
        this.app.use(cors());

        // body parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // set static file url
        this.app.use('/static', express.static(path.resolve('./', 'public')));

        // morgan
        if(this.app.get('env'))
            this.app.use(morgan('dev'));
    }

    // setup router and error handle
    setupRoutes() {
        this.app.use('/api' ,router);
        this.app.use('*', api404ErrorHandler);
        this.app.use(apiErrorHandler);
    }

};