import { Router } from "express";
import { createUserController } from "../controllers/users/user.controller";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";

const userRouter = Router()

userRouter.post("", verifyEmailExistsMiddleware, createUserController)

export default userRouter