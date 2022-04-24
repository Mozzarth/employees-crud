import { empleadoRouter } from './employe.routes'
import { Router } from 'express'


const routes = Router()

routes.use("/employe", empleadoRouter)

export { routes }