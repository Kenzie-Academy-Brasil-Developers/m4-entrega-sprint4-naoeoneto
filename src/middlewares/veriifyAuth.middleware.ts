import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"

const verifyAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let auth = req.headers.authorization

    if(!auth){
        return res.status(401).json({ message: "Invalid token!" })
    }

    auth.split(' ')[1]

    jwt.verify(auth, process.env.SECRET_KEY as string, (error, decoded) => {
        if(error){
            return res.status(401).json({ message: error.message })
        }

        // req.user = {
        //     id: decoded.sub,
        //     isAdm: decoded.isAdm
        // }
    })

    return next()
}

export default verifyAuthMiddleware