import { Request, Response, NextFunction } from "express";
import { expressLib } from '../libs'

function manejoErrorExpress(error: Error, req: Request, res: Response, next: NextFunction) {
    return res.status(500).send({ ok: false, error });
}

function routerNotFound(req: Request, res: Response, next: NextFunction) {
    return expressLib.respuestaGeneral(req, res, { status: 404, error: "Router not found", message: "Router not found" })
}




export default { manejoErrorExpress, routerNotFound }