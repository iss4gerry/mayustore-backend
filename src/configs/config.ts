import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

export default {
    port: process.env.PORT, 
    database: {
        url: process.env.DATABASE_URL
    }
}