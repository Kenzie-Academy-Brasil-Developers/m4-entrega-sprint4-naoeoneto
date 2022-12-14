import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/users/user.controller";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";
import verifyAuthMiddleware from "../middlewares/veriifyAuth.middleware";

const userRouter = Router()

userRouter.post("", verifyEmailExistsMiddleware, createUserController)
userRouter.get("",  verifyAuthMiddleware, verifyUserIsAdmMiddleware, listUsersController)
// userRouter.patch("/:id", listUsersController)
// userRouter.delete("/:id", listUsersController)

export default userRouter