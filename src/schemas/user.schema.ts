import { v4 } from "uuid"
import * as yup from "yup"

const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const returnedUserSchema = yup.object().shape({
    id: yup.string().uuid().default(() => v4()). transform(() => v4()),
    name: yup.string(),
    email: yup.string().email(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

const listUsersSchema = yup.array(returnedUserSchema)

export { createUserSchema, returnedUserSchema, listUsersSchema }