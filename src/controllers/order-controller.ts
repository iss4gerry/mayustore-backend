import { Request, Response } from "express";
import { OrderService } from "../services/order-service";
import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";

export class OrderController {
    static findOrder = catchAsync(async(req: Request, res: Response) => {
        const result = await OrderService.findOrder(Number(req.params.id))

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success',
            data: result
        })
    })

    static addToCart = catchAsync(async(req: Request, res: Response) => {
        const result = await OrderService.addToCart(Number(req.params.id), String(req.body.product))

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success',
            data: result
        })
    })

    static removeFromCart = catchAsync(async(req: Request, res: Response) => {
        const result = await OrderService.removeFromCart(Number(req.params.id), String(req.params.product))

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success',
            data: result
        })
    })
}