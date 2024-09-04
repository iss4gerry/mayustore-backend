import Order from "../models/orderModel";
import { OrderResponse } from "../types/order-types";

export class OrderService {
    static async findOrder(userId: number): Promise<OrderResponse[]> {
        return await Order.aggregate([
            {
                $match: {
                    user_id: userId
                }
            },
            {
                $lookup: {
                    from: 'products', 
                    localField: 'cart_items', 
                    foreignField: 'code', 
                    as: 'products', 
                }
            }
        ]);
    }

    static async addToCart(id: number, productCode: string): Promise<unknown> {
        return await Order.updateOne({
            user_id: id
        },{
            $addToSet: {
                cart_items: productCode
            }
        }
    )
    }

    static async removeFromCart(id: number, productCode: string): Promise<unknown> {
        return await Order.updateOne({
            user_id: id
        },{
            $pull: {
                cart_items: productCode
            }
        }
    )
    }
}
