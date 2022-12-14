import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"

const verifyEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRep = AppDataSource.getRepository(User)

    const verifyEmail = await userRep.findOneBy({ email: req.body.email })
    if(verifyEmail){
        return res.status(400).json({ message: "User already exists!" })
    }

    return next()
}

export default verifyEmailExistsMiddleware