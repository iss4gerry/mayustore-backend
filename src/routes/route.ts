import { OrderController } from '../controllers/order-controller'
import { ProductController } from '../controllers/product-controller'
import express from 'express'

const router = express.Router()

router
    .route('/products')
    .get(ProductController.findAll)

router
    .route('/products/:id')
    .get(ProductController.getOne)

router 
    .route('/orders/user/:id')
    .get(OrderController.findOrder)

router 
    .route('/orders/user/:id/add')
    .post(OrderController.addToCart)

router 
    .route('/orders/user/:id/product/:product')
    .delete(OrderController.removeFromCart)

export default router