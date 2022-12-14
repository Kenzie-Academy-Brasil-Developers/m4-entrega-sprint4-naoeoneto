import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users/users.interfaces";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
    const login: IUserLogin = req.body
    const [status, token] = await createSessionService(login)
    return res.status(status as number).json({ token })
}

export default createSessionController