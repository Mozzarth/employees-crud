import { Request, Response } from 'express'
import { IResponse } from '../interface'


function manejoError(err: any, req: Request, res: Response) {
    const message = err.message || "Error"
    respuestaGeneral(req, res, { status: 500, error: err, message })
}

function respuestaGeneral(req: Request, res: Response, response: IResponse) {
    response.ok = response.status < 400 ? true : false
    response.url = req.originalUrl
    res.status(response.status).send(response)
}



export default {
    manejoError,
    respuestaGeneral
}