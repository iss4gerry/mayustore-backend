import Product from '../models/productModel'
import { AllProductResponse } from '../types/product-type'


export class ProductService {
    static async getAll(): Promise<AllProductResponse> {
        return await Product.find({})
    }
}