class ApiError extends Error {
    statusCode: number;
    isOperational: boolean;

    constructor(statusCode: number, message: string, isOperational: boolean = true, stack?: string) {
        super(message);
        
        Object.setPrototypeOf(this, new.target.prototype);
        
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    toString() {
        return `ApiError [statusCode=${this.statusCode}, message=${this.message}]`;
    }
}

export default ApiError;
