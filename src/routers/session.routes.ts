import { Router } from "express";
import createSessionController from "../controllers/session/session.controller";
// import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";

const sessionRouter = Router()

sessionRouter.post("", createSessionController) //verifyEmailExistsMiddleware,

export default sessionRouter