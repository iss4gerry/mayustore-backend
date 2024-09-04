import { ProductController } from '../controllers/product-controller'
import express from 'express'

const router = express.Router()

router
    .route('/product')
    .get(ProductController.findAll)

export default router