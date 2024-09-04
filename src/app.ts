import express from 'express'
import bodyParserErrorHandler from 'express-body-parser-error-handler'
import { Request, Response } from 'express'
import errorHandler from './middlewares/errorHandler'
import router from './routes/route'
import path from 'path'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/img', express.static(path.join(__dirname, '../public/img')))

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World'
    })
})

app.use(bodyParserErrorHandler())

app.use('/api', router)
app.use(errorHandler)

export default app