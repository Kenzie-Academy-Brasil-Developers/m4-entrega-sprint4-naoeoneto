import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserLogin } from "../../interfaces/users/users.interfaces"
import "dotenv/config"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

const createSessionService = async (data: IUserLogin): Promise<Array<number | string>> => {
    const userRep = AppDataSource.getRepository(User)

    const loggedUser = await userRep.findOneByOrFail({ email: data.email })
    if(!loggedUser){
        return [401, "Wrong email/password!"]
    }

    const comparePassword = await compare(data.password, loggedUser.password)

    if(!comparePassword){
        return [401, "Wrong email/password!"]
    }

    const token = jwt.sign(
        { 
            adm: loggedUser.isAdm 
        },
        process.env.SECRET_KEY as string,
        { 
            subject: loggedUser.id as string, 
            expiresIn: "24h"
        }
    )

    return [200, token]
}

export default createSessionService