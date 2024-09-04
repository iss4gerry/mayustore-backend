import Product from '../models/productModel'
import { AllProductResponse, ProductResponse } from '../types/product-type'


export class ProductService {
    static async getAll(): Promise<AllProductResponse> {
        return await Product.find({})
    }

    static async getOne(id: number): Promise<ProductResponse> {
        return await Product.findOne({
            code: id
        })
    }
}