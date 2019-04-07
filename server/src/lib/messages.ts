export class ErrorMessage extends Error {
    constructor(
        message: string,
        public status: number,
        public properties ? : any,
        public internalProperties ? : any
    ) {
        super();
        this.message = message;
    }
    publicVersion() {
        return new PublicErrorMessage(this);
    }
};

export class PublicErrorMessage {
    message: string
    status: number
    properties ? : any
    constructor(err: ErrorMessage) {
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
};

export class PublicInfoMessage {
    constructor(
        public message: string,
        public status: number,
        public properties ? : any
    ) {};
};