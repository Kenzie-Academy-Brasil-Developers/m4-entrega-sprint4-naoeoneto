import { IUserRequest } from '../../interfaces/users/users.interfaces';
import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import listUsersService from '../../services/users/listUsers.service';

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    const data = await createUserService(userData)
    return res.status(201).json(data)
}

const listUsersController = async (req: Request, res: Response) => {
    const data = await listUsersService()
    return res.status(200).json(data)
}

export { createUserController, listUsersController }