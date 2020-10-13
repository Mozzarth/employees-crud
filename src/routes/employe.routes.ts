import { Router } from 'express'
import { emleadoController } from '../controllers'
import { expresMidd } from '../middlewares'

const empleadoRouter = Router()

empleadoRouter.get("/", emleadoController.getEmployes)
empleadoRouter.get("/:id", emleadoController.getEmploye)

empleadoRouter.post("/", emleadoController.createEmploye)
empleadoRouter.put("/:id", emleadoController.updateEmploye)
empleadoRouter.delete("/:id", emleadoController.deleteEmploye)



export { empleadoRouter }