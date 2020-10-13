import { NextFunction, Request, Response } from "express";
import { employeService } from '../service'
import { IEmploye } from '../interface'
import { expressLib } from '../libs'

class EmployeController {

    async getEmploye(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(22)
            if (req.params.id == undefined) { return next() }
            let employe = await employeService.getEmploye(req.params.id)
            if (!employe) { throw new Error("Empleyo no exist") }
            let result = { status: 200, data: employe }
            return expressLib.respuestaGeneral(req, res, result)
        } catch (error) {
            expressLib.manejoError(error, req, res)
        }
    }
    async getEmployes(req: Request, res: Response) {
        try {
            let employes = await employeService.getEmployees()
            let result = { status: 200, data: employes }
            return expressLib.respuestaGeneral(req, res, result)
        } catch (error) {
            expressLib.manejoError(error, req, res)
        }

    }
    async createEmploye(req: Request, res: Response) {
        try {
            let employe: IEmploye = req.body
            let employeDb = await employeService.createEmploye(employe)
            let result = { status: 200, data: employeDb }
            return expressLib.respuestaGeneral(req, res, result)
        } catch (error) {
            expressLib.manejoError(error, req, res)
        }
    }
    async updateEmploye(req: Request, res: Response) {
        try {
            let employe: IEmploye = req.body
            let employeDb = await employeService.updateEmploye(employe)
            let result = { status: 200, data: employeDb }
            return expressLib.respuestaGeneral(req, res, result)
        } catch (error) {
            expressLib.manejoError(error, req, res)
        }
    }
    async deleteEmploye(req: Request, res: Response) {
        try {
            let employes = await employeService.deleteEmploye(req.params.id)
            let result = { status: 200, data: employes }
            return expressLib.respuestaGeneral(req, res, result)
        } catch (error) {
            expressLib.manejoError(error, req, res)
        }
    }


}


export = new EmployeController()