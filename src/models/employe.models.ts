import { Schema, model } from 'mongoose'


const employeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
    estado: { type: Boolean, required: true, default: true },
}, { timestamps: true })


let employeModel = model("employe", employeSchema)
export { employeModel }