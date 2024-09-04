import { Request, Response } from "express"
import catchAsync from '../utils/catchAsync'
import { ProductService } from '../services/product-service'
import httpStatus from "http-status"

export class ProductController {
    static findAll = catchAsync(async (req: Request, res: Response) => {
        const result = await ProductService.getAll()

        res.status(httpStatus.OK).send({
            status: httpStatus.OK, 
            message: 'Success',
            data: result
        })
    })

    static getOne = catchAsync(async (req: Request, res: Response) => {
        const result = await ProductService.getOne(Number(req.params.id))

        res.status(httpStatus.OK).send({
            status: httpStatus.OK, 
            message: 'Success',
            data: result
        })
    })
}