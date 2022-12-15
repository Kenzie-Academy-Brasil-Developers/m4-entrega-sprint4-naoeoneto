export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}

export interface IUser {
    id: string
    name: string
    email: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IUserResponse {
    id: string | undefined
    name: string | undefined
    email: string | undefined
    isAdm?: boolean | undefined
    isActive: boolean | undefined
    createdAt: Date | undefined
    updatedAt: Date | undefined
    deletedAt?: Date | undefined
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}