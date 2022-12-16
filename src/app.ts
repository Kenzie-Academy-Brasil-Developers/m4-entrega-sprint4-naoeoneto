import "reflect-metadata"
import express from "express"
import "express-async-errors"
import userRouter from "./routers/user.routes"
import sessionRouter from "./routers/session.routes"
import { handleError } from "./errors"

const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/login", sessionRouter)
app.use(handleError)

export default app