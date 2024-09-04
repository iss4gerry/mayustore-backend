import expess from 'express'
import { Request, Response } from 'express'
import errorHandler from './middlewares/errorHandler'
import router from './routes/product-route'

const app = expess()

app.use(expess.json())
app.use(expess.urlencoded({ extended:true }))

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World'
    })
})

app.use('/api', router)
app.use(errorHandler)

export default app