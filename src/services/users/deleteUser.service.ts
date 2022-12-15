import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const deleteUserService = async (userId: string): Promise<User> => {
    const userRep = AppDataSource.getRepository(User)
    
    const user = await userRep.findOneBy({ id: userId })
    user.isActive = false
    
    return await userRep.save(user)
}

export default deleteUserService