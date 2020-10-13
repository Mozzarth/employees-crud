import dotenv from 'dotenv'

if (process.env.NODE_ENV == undefined) {
    dotenv.config()
}


export const SERVER = {
    PORT: Number(process.env.NODE_PORT),
    URI_MONGO: process.env.NODE_DATA,
    HOST: process.env.NODE_HOST || "",
}
