import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const listUsersService = async (): Promise<User[]> => {
    const userRep = AppDataSource.getRepository(User)
    return await userRep.find()
}

export default listUsersService