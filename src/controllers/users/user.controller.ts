import { IUserRequest } from '../../interfaces/users/users.interfaces';
import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    const data = await createUserService(userData)
    return res.status(201).json(data)
}

export { createUserController }