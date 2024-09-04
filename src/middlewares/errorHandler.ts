import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'

interface CustomError extends Error {
    statusCode?: number
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({
        status: statusCode,
        message: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    })
}

export default errorHandler
