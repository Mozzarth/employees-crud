import { expresMidd } from './middlewares'
import swagger from 'swagger-ui-express'
import swaggerDoc from './swagger.json'
import body_parser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'


import { Server } from './classes/'
import { routes } from './routes'

const server = Server.instance

// middleware
server.app.use(body_parser.urlencoded({ extended: false }))
server.app.use(body_parser.json())
server.app.use(morgan("dev"))
server.app.use(cors())
// System routers
server.app.use("/api", routes)

// Documentation
server.app.use("/doc", swagger.serve, swagger.setup(swaggerDoc))

// router not found
server.app.use(expresMidd.routerNotFound)

//error handler 
server.app.use(expresMidd.manejoErrorExpress)

// Init Server
server.start()
