import { employeModel } from '../models'
import { IEmploye } from '../interface'


class EmployeService {

    async getEmployees() {
        return employeModel.find({ estado: true })
    }
    async getEmploye(id: string) {
        return employeModel.findById(id)
    }
    async createEmploye(employe: IEmploye) {
        return employeModel.create(employe)
    }
    async updateEmploye(employe: IEmploye) {
        return employeModel.findByIdAndUpdate(employe._id, employe)
    }
    async deleteEmploye(id: string) {
        return employeModel.findByIdAndUpdate(id, { estado: false })
    }



}



export = new EmployeService()