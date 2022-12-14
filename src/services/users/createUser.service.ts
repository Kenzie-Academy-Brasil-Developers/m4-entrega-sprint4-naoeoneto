import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/users/users.interfaces";

const createUserService = async (data: IUserRequest): Promise<IUser> => {
    const userRep = AppDataSource.getRepository(User)

    const newUser = userRep.create(data)
    await userRep.save(newUser)

    const newUserResponse = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdm: newUser.isAdm,
        isActive: newUser.isActive,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt
    }

    return newUserResponse
}

export default createUserService