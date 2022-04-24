import express from 'express'

import { dbConnect } from "./database";
import { SERVER } from '../config'

export class Server {
    public app: express.Application
    public readonly PORT: number
    public readonly HOST: string

    private static _instance: Server

    private constructor() {
        this.app = express()
        this.PORT = SERVER.PORT
        this.HOST = SERVER.HOST
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    public start() {
        dbConnect()
            .then(mongoose => this.listenServer())
            .catch(err => console.log("Error db", err))
    }

    private listenServer() {
        this.app.listen(this.PORT, this.HOST, () => {
            console.log("Server runnig on port", this.PORT, this.HOST)
        })
    }



}