import { Router } from "express";
import { createUserController, deleteUserController, listUsersController } from "../controllers/users/user.controller";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";
import verifyUserIsOwnerMiddleware from "../middlewares/verifyUserIsOwner.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createUserSchema } from "../schemas/user.schema";
import verifyIsActiveMiddleware from "../middlewares/verifyIsActive.middleware";

const userRouter = Router()

userRouter.post("", validateDataMiddleware(createUserSchema), verifyEmailExistsMiddleware, createUserController)
userRouter.get("",  verifyAuthMiddleware, verifyUserIsAdmMiddleware, listUsersController)
userRouter.delete("/:id", verifyAuthMiddleware, verifyIsActiveMiddleware, verifyUserIsOwnerMiddleware, deleteUserController)
// userRouter.patch("/:id", verifyAuthMiddleware, verifyUserIsOwnerMiddleware, listUsersController)

export default userRouter