import { NextFunction, Request, Response } from "express";

const verifyIsActiveMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.user.active){
            return res.status(400).json({ message: "You are not active"})
        }
    
        return next()
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.errors })
    }
}

export default verifyIsActiveMiddleware