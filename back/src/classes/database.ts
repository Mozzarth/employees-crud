import mongoose from 'mongoose'
import { SERVER } from '../config'


export function dbConnect() {
    return mongoose.connect(`mongodb://${SERVER.URI_MONGO}/employe`,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        }
    )
}
