import { ProductResponse } from "./product-type"

export type OrderResponse = {
    id: string
    user_id: number,
    cart_items: string[]
    products: ProductResponse[]
}