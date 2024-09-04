import { OrderController } from '../controllers/order-controller'
import { ProductController } from '../controllers/product-controller'
import express from 'express'

const router = express.Router()

router
    .route('/products')
    .get(ProductController.findAll)

router 
    .route('/users/:id')
    .get(OrderController.findOrder)

export default router