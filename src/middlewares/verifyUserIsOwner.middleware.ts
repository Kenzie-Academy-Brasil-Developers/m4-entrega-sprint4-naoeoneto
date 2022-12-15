import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { AppError } from "../errors"

const verifyUserIsOwnerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.user.adm && req.user.id !== req.params.id){
            // return res.status(403).json({ message: "You don't have this permission" })
            throw new AppError("You don't have this permission", 403)
        }
    
        return next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.errors })
    }
}

export default verifyUserIsOwnerMiddleware

// if(!user?.isAdm){
//     return res.status(403).json({ message: "You are not allowed do to this" })
// }