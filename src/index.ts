import mongoose from "mongoose"
import app from "./app"
import config from "./configs/config"

mongoose.connect(config.database.url)
    .then(() => {
        app.listen(config.port, () => {
            console.log(`running on port ${config.port}`)
        })
    }).catch(() => {
        console.log('cannot connect to database')
        process.exit()
    })

